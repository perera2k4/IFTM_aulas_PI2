const mongoose = require("mongoose");

// Criar um Schema para Aluno
const gameSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "'Título' é um campo obrigatório."],
      minlength: [2, "'Título' muito curto."],
      maxlength: [100, "'Título' muito longo."],
    },
    genero: {
      type: String,
      required: [true, "'Gênero' é um campo obrigatório."],
      minlength: [2, "'Gênero' muito curto."],
      maxlength: [100, "'Gênero' muito longo."],
    },
    plataforma: {
      type: String,
      required: [true, "'Plataforma' é um campo obrigatório."],
      minlength: [2, "'Plataforma' muito curto."],
      maxlength: [50, "'Plataforma' muito longo."],
    },
    lancamento: {
      type: Date,
      min: [1958, "Ano de 'Lançamento' deve ser maior de 1958."],
    },
  },
  { versionKey: false }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;