const express = require("express"); //npm install express --save
const mongoose = require("mongoose"); //npm install mongoose --save
const dotenv = require("dotenv"); //npm install dotenv --save
const conectaDB = require("./db");
const alunosRouter = require("./routes/alunos.routes"); //Rotas
const cors = require("cors"); // npm install cors --save

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();
conectaDB(); //Fazendo a conexão com o Mongodb

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

//Rotas
app.use("/alunos", alunosRouter);

// Handler de erros (Tratamento de exceção)
app.use((err, req, res, next) => {
  console.error(`Erro: ${err}`);

  // Erro de cast
  if (err.name == "CastError") {
    return res.status(400).json({ erro: "ID inválido" });
  }

  // Erro de validação
  if (err.name == "ValidationError") {
    res.status(400).json({ erro: "Validação falhou", detalhes: err.errors });
  }

  res.status(500).json({ erro: "Erro interno do servidor" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
