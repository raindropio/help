import Firecrawl from '@mendable/firecrawl-js'
import * as pinecone from './pinecone'

const PINECONE_HOST = 'https://help-7rkqtoo.svc.aped-4627-b74a.pinecone.io'

console.time('crawl')
const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_KEY })

const mds = await firecrawl.crawl('https://help.raindrop.io', {
    crawlEntireDomain: true,
    scrapeOptions: {
        formats: ['markdown'],
    }
})
// const mds = await firecrawl.getCrawlStatus('019b26bd-af02-70b8-8acb-620a77029d9e')

const docs = mds.data.map((md) => ({
    id: md.metadata.url,
    markdown: md.markdown
        ?.replace(/^\[Skip.*ToContent_fallback\)/gm, '')
        ?.replace(/^On this page/gm, '')
        .trim()
}))
console.timeEnd('crawl')

//delete turbopuffer namespace
console.time('delete-all')
await pinecone.deleteAllRecords(PINECONE_HOST)
console.timeEnd('delete-all')

//insert docs
console.time('insert')
await pinecone.upsertRecords(PINECONE_HOST, docs)
console.timeEnd('insert')

//test query
const test = await pinecone.search(PINECONE_HOST, {
    "query": {
        "inputs": {"text": "create bookmark ios"},
        "top_k": 5
    },
    "fields": ["markdown"]
})
console.log(test.result.hits)