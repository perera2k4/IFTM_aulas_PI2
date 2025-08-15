/* 1. Criar um CRUD para "produtos" com { id, nome, preço }
2. Implementar as rotas:
	a. POST /produtos
	b. GET /produtos (todos)
	c. GET /produtos/:id (único)
	d. PUT /produtos/:id
	e. PATCH /produtos/:id
	f. DELETE /produtos/:id
3. Testar as rotas no POSTMAN
4. Garantir que os ids sejam numéricos e que os retornos tenham os status code adequados (201, 204, 404) */

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let produtos = [];
let idCounter = 1;

// POST
app.post("/produtos", (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto = { id: idCounter++, nome, preco };
    if (nome && preco) {
        produtos.push(novoProduto);
        res.status(201).json(novoProduto);
    } else {
        res.status(400).json({ erro: `Erro ao criar o produto.` });
    }
});

// GET (Todos)
app.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});

// GET (Único)
app.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((u) => u.id === id);
    if (!produto) {
        res.status(404).json({
            erro: `Produto com id: ${id} não foi encontrado.`,
        });
    } else {
        res.status(200).json(produto);
    }
});

// PUT
app.put("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produto = produtos.find((u) => u.id === id);
    if (!produto) {
        res.status(404).json({
            erro: `Produto com id: ${id} não foi encontrado.`,
        });
    } else {
        if (nome) {
            produto.nome = nome;
        }
        if (preco) {
            produto.preco = preco;
        }
        res.status(200).json(produtos);
    }
});

// PATCH
app.patch("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produto = produtos.find((u) => u.id === id);
    if (!produto) {
        res.status(404).json({
            erro: `Produto com id: ${id} não foi encontrado.`,
        });
    } else {
        if (nome) {
            produto.nome = nome;
        }
        if (preco) {
            produto.preco = preco;
        }
        res.status(200).json(produtos);
    }
});

// DELETE
app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (produtos.find((u) => u.id === id)) {
        produtos = produtos.filter((u) => u.id !== id);
        res.status(200).json({
            mensagem: `Produto com id: ${id} foi deletado.`,
        });
    } else {
        res.status(404).json({
            erro: `Produto com id: ${id} não foi encontrado.`,
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado: http://localhost:${port}`);
});
