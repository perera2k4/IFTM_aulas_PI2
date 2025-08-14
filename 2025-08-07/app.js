//console.log("hello world")

const http = require('http')

const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello world\n")
})

server.listen(port, host, () => {
    console.log(`Servidor iniciado em ${host} na porta ${port}`)
})