export async function deleteAllRecords(host: string) {
    const res = await fetch(`${host}/vectors/delete`, {
        method: 'POST',
        headers: {
            'Api-Key': process.env.PINECONE_KEY,
            'Content-Type': 'application/json',
            'X-Pinecone-Api-Version': '2025-10'
        },
        body: JSON.stringify({
            deleteAll: true,
            namespace: '__default__'
        })
    })
    if (!res.ok) {
        const error = await res.json() 
        if (error.code == 5) return // namespace not found
        throw new Error('Failed to delete all records:' + JSON.stringify(error))
    }
}

export async function upsertRecords(host: string, records: any[]) {
    const res = await fetch(`${host}/records/namespaces/__default__/upsert`, {
        method: 'POST',
        headers: {
            'Api-Key': process.env.PINECONE_KEY,
            'Content-Type': 'application/x-ndjson',
            'X-Pinecone-Api-Version': '2025-10'
        },
        body: records.map(r => JSON.stringify(r)).join('\n')
    })
    if (!res.ok)
        throw new Error(`Failed to upsert records: ${await res.text()}`)
}

export async function search(host: string, body: any) {
    const res = await fetch(`${host}/records/namespaces/__default__/search`, {
        method: 'POST',
        headers: {
            'Api-Key': process.env.PINECONE_KEY,
            'Content-Type': 'application/json',
            'X-Pinecone-Api-Version': '2025-10'
        },
        body: JSON.stringify(body)
    })
    if (!res.ok)
        throw new Error(`Failed to search records: ${await res.text()}`)
    return res.json()
}