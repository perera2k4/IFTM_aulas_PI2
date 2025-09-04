const express = require("express");
const Game = require("../models/Game");
const router = express.Router();

// GET (ALL ITEMS)
router.get("/", async (req, res, next) => {
  try {
    const { titulo } = req.query;
    const filtro = {};
    if (titulo) {
      filtro.titulo = new RegExp(titulo, "i");
    }
    const games = await Game.find(filtro).sort({ genero });
    return res.json(games);
  } catch (error) {
    next(error);
  }
});
