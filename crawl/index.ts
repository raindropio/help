import Firecrawl from '@mendable/firecrawl-js'
import * as cohere from './cohere'
import * as turbopuffer from './turbopuffer'

const TURBOPUFFER_REGION = 'aws-eu-central-1'
const TURBOPUFFER_NAMESPACE = `help`
const VECTOR_DIMENSIONS = 1536
const COHERE_MODEL = 'embed-v4.0'

console.time('crawl')
const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_KEY })
const mds = await firecrawl.crawl('https://help.raindrop.io', {
    limit: 500,
    scrapeOptions: {
        formats: ['markdown'],
    }
})
console.timeEnd('crawl')

//embed documents
console.time('embed')
const docs = mds.data.map((md) => ({
    id: md.metadata.url,
    markdown: md.markdown
}))

const embeddings = await cohere.embed({
    texts: docs.map(d => d.markdown),
    model: COHERE_MODEL,
    input_type: 'search_document',
    output_dimension: VECTOR_DIMENSIONS
})
embeddings.forEach((vector, i)=>{
    docs[i].vector = vector
})
console.timeEnd('embed')

//delete turbopuffer namespace
console.time('delete-namespace')
await turbopuffer.deleteNamespace(TURBOPUFFER_REGION, TURBOPUFFER_NAMESPACE)
console.timeEnd('delete-namespace')

//insert docs
console.time('insert')
await turbopuffer.insert(TURBOPUFFER_REGION, TURBOPUFFER_NAMESPACE, {
    schema: {
        markdown: {
            type: 'string',
            full_text_search: true
        },
        vector: {
            type: `[${VECTOR_DIMENSIONS}]f16`,
            ann: true
        }
    },
    distance_metric: 'cosine_distance',
    upsert_rows: docs
})
console.timeEnd('insert')

//test query
const test = await turbopuffer.query(TURBOPUFFER_REGION, TURBOPUFFER_NAMESPACE, {
    rank_by: [
        'vector',
        'ANN',
        await (async () => {
            const [vector] = await cohere.embed({
                texts: ['create bookmark ios'],
                model: COHERE_MODEL,
                input_type: 'search_query',
                output_dimension: VECTOR_DIMENSIONS
            })
            return vector
        })()
    ],
    top_k: 3,
    include_attributes: ['markdown']
})

console.log(test)