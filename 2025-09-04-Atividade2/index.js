const express = require("express"); // npm install express --save
const mongoose = require("mongoose"); // npm install mongoose --save
const dotenv = require("dotenv"); // npm install dotenv --save
const cors = require("cors"); // npm install cors --save
const conectaDB = require("./db");
const gamesRouter = require("./routes/games.routes"); // ROTAS DO MÉTODO GET

const port = 3000;
const app = express();

app.use(express.json());
dotenv.config();
conectaDB(); // REALIZANDO CONEXÃO COM MONGODB

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// ROTAS
app.use("/games", gamesRouter);

// HANDLER DE ERROS (TRATAMENTO DE EXCEÇÃO)
app.use((err, req, res, next) => {
  console.error(`Erro: ${err}`);

  // ERRO DE CAST
  if (err.name == "CastError") {
    return res.status(400).json({ erro: "ID inválido" });
  }

  // ERRO DE VALIDAÇÃO
  if (err.name == "ValidationError") {
    res.status(400).json({ erro: "Validação falhou", detalhes: err.errors });
  }

  // ERRO DO SERVIDOR
  res.status(500).json({ erro: "Erro interno do servidor" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
