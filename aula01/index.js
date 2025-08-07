const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.json({message: 'Hello world'})
})

// Rota com parâmetros na URL
app.get('/hello/:nome', (req, res) => {
    const nome = req.params.nome
    res.json({message: `Hello ${nome}!`})
})

// Rota com parâmetros na queryString
app.get('/pesquisa', (req, res) => {
    const nome = req.query.nome
    const sobrenome = req.query.sobrenome
    const mensagem = `${nome} ${sobrenome}`
    res.json({message: `Hello: ${mensagem}`}) // Exemplo de rota: http://localhost:3000/pesquisa?nome=bruno&sobrenome=pereira
})
 
app.listen(port, () =>{
    console.log(`Servidor iniciado em http://localhost:${port}`)
})