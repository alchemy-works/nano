function handleRequest(request) {

    const json = JSON.stringify({
        group: 'alchemy-works',
        name: 'nano',
    })

    return new Response(json, {
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
    })
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
})
