export async function embed(params: {
    model: string,
    texts: string[],
    input_type: 'search_document' | 'search_query',
    output_dimension: number
}) {
    const res = await fetch(`https://api.cohere.com/v2/embed`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.COHERE_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })

    const { embeddings } = await res.json()
    return embeddings.float
}