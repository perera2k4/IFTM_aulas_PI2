const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Variáveis de persistência de memória
let usuarios = [];
let idCounter = 1;

// POST - Rota para enviar informações
app.post("/usuarios", (req, res) => {
    const { nome, idade } = req.body;
    const novoUsuario = { id: idCounter++, nome, idade };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// GET - Rota para receber informações
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// PUT - Rota para alterar completamente informações
app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;
    const usuario = usuarios.find((u) => u.id === id);
    if (!usuario)
        return res
            .status(404)
            .json({ erro: `Usuário id: ${id} não encontrado` });
    usuario.nome = nome;
    usuario.idade = idade;
    res.json(usuario);
});

// PATCH - Rota para alterar parcialmente as informações
app.patch("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;
    const usuario = usuarios.find((u) => u.id === id);
    if (!usuario)
        return res
            .status(404)
            .json({ erro: `Usuário id: ${id} não encontrado` });
    if (nome) {
        usuario.nome = nome;
    }
    if (idade) {
        usuario.idade = idade;
    }
    res.json(usuario);
});

// DELETE - Rota para deletar
app.delete("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    usuarios = usuarios.filter((u) => u.id !== id);
    res.status(204).send();
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado, rodando na porta: ${port}`);
});
