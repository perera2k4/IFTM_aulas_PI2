// Criar um schema para Aluno
const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, "Campo {nome} é obrigatório."],
      minlength: [2, "Campo {nome} muito curto"],
      maxlength: [100, "Campo {nome} muito longo"],
    },
    idade: {
      type: Number,
      required: [true, "Campo {idade} é obrigatório."],
      min: [0, "Campo {idade} muito curto"],
      max: [150, "Campo {idade} inválido"],
    },
    curso: {
      type: String,
      required: [true, "Campo {curso} é obrigatório."],
      maxlength: [120, "Campo {curso} muito longo"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Aluno = mongoose.model("Aluno", alunoSchema);
module.exports = Aluno;
