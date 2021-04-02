function handleRequest(request) {
    const { pathname } = new URL(request.url);

    return new Response(
        `<body
      align="center"
      style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1.5rem;"
    >
      <h1>nano</h1>
      <p>Hi there, this is <strong>nano</strong></p>
    </body>`,
        {
            headers: {
                "content-type": "text/html; charset=UTF-8",
            },
        },
    )
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
})
