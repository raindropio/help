export async function deleteNamespace(region: 'aws-eu-central-1', namespace: string) {
    const del = await fetch(`https://${region}.turbopuffer.com/v2/namespaces/${namespace}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${process.env.TURBOPUFFER_TOKEN}`
        }
    })
    if (!del.ok)
        throw new Error(`Failed to delete namespace: ${await del.text()}`)
}

export async function insert(region: 'aws-eu-central-1', namespace: string, body: any) {
    const res = await fetch(`https://${region}.turbopuffer.com/v2/namespaces/${namespace}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.TURBOPUFFER_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (!res.ok)
        throw new Error(`Failed to insert to namespace: ${await res.text()}`)
}

export async function query(region: 'aws-eu-central-1', namespace: string, body: any) {
    const res = await fetch(`https://${region}.turbopuffer.com/v2/namespaces/${namespace}/query`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.TURBOPUFFER_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (!res.ok)
        throw new Error(`Failed to query namespace: ${await res.text()}`)
    return res.json()
}