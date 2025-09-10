const express = require("express");
const Game = require("../models/Game");
const router = express.Router();

// GET
router.get("/", async (req, res, next) => {
  try {
    const { titulo } = req.query;
    const filtro = {};
    if (titulo) {
      filtro.titulo = new RegExp(titulo, "i");
    }
    const games = await Game.find(filtro).sort({ lancamento: -1 });
    return res.json(games);
  } catch (error) {
    next(error);
  }
});

// GET by ID
router.get("/:id", async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ erro: "ID não encontrado" });
    }
    return res.json(game);
  } catch (error) {
    next(error);
  }
});

// POST
router.post("/", async (req, res, next) => {
  try {
    const game = await Game.create(req.body);
    return res.status(201).json(game);
  } catch (error) {
    next(error);
  }
});

// PUT
router.put("/:id", async (req, res, next) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({ erro: "ID não encontrado para editar" });
    }
    return res.json(game);
  } catch (error) {
    next(error);
  }
});

// PATCH
router.patch("/:id", async (req, res, next) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({ erro: "ID não encontrado para editar" });
    }
    return res.json(game);
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ erro: "ID não encontrado para deletar" });
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
