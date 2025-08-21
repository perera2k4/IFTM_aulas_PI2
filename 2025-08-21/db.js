const mongoose = require("mongoose"); // npm install mongoose --save

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log(`MONGODB_URI não configurado/não encontrado`);
    process.exit(1);
  }

  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(uri);
    console.log(`Conectado ao Atlas MongoDB`);
  } catch (error) {
    console.log(`Erro ao conectar ao Atlas MongoDB\n${err}`);
    process.exit(1);
  }
}

module.exports = connectDB;
