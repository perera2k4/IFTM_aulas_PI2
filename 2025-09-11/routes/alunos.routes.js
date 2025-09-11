// Criar as rotas do CRUD
// /routes/alunos.routes.js
// nome: "André Luiz França Batista"

const express = require("express");
const Aluno = require("../models/Aluno");

const router = express.Router();

// POST
router.post("/", async (req, res, next) => {
  try {
    const aluno = await Aluno.create(req.body);
    return res.status(201).json(aluno);
  } catch (error) {
    next(error); //Criar a rota de interceptação
  }
});

// GET (lista de registros)
router.get("/", async (req, res, next) => {
  try {
    const { nome } = req.query;
    const filtro = {};
    if (nome) {
      filtro.nome = new RegExp(nome, "i");
    }
    const alunos = await Aluno.find(filtro).sort({ createdAt: -1 });
    return res.json(alunos);
  } catch (error) {
    next(error);
  }
});

// GET (único registro)
router.get("/:id", async (req, res, next) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).json({ erro: "ID não encontrado" });
    }
    return res.json(aluno);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!aluno) {
      return res.status(404).json({ erro: "ID não encontrado" });
    }
    return res.json(aluno);
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const aluno = await Aluno.findByIdAndDelete(req.params.id);
    if (!aluno) {
      return res.status(404).json({ erro: "ID não encontrado para a remoção" });
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
