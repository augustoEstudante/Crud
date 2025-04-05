const express = require("express");
const app = express();
const port = 3000;

const router = require ("./Routes/moduleRoute");

router (app);

app.listen (port, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`Servidor rodando na porta ${port}`);
  }
});

