const express = require("express");
const app = express();
const port = 3000;

const router = require ("./Routes/moduleRoute");
const conexao = require ("./Connection/connections");
const table = require ("./Connection/tables");

table.init(conexao);


router (app);

app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.listen (port, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`Servidor rodando na porta ${port}`);
  }
});



