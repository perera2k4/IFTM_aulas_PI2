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
    ano_lancamento: {
      type: Number,
      required: [true, "Ano de 'Lançamento' é um campo obrigatório."],
      min: [1900, "Ano de 'Lançamento' deve ser maior que 1900."],
      max: [2100, "Ano de 'Lançamento' deve ser menor que 2100."],
    },
  },
  { versionKey: false }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
