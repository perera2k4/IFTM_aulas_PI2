const express = require("express"); // npm install express --save
const dotenv = require("dotenv"); // npm install dotenv --save
const connectDB = require("./db");
const alunosRouter = require("./routes/alunos.routes")

const port = 3000;
const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// Rotas
app.use("/alunos", alunosRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado em: http://localhost:${port}`);
});
