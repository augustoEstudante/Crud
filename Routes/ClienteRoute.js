const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// CRUD

router.get("/Clientes", (req, res) => {
  clienteController.listar()
    .then(clientes => res.status(200).json(clientes))
    .catch(error => res.status(500).json({ message: error.message }));
});

router.post("/Cliente/post", (req, res) => {
  const cliente = req.body;
  clienteController.criar(cliente)
    .then(novoCliente => res.status(201).json(novoCliente))
    .catch(error => res.status(400).json({ message: error.message }));
});

router.put("/Clientes/:id", (req, res) => {
  const { id } = req.params;
  const clienteAtualizado = req.body;
  clienteController.alterar(clienteAtualizado, id)
    .then(resultAtualizado => res.status(200).json(resultAtualizado))
    .catch(error => res.status(400).json({ message: error.message }));
});

router.delete("/Clientes/:id", (req, res) => {
  const { id } = req.params;
  clienteController.apagar(id)
    .then(mensagem => res.status(200).json({ message: mensagem }))
    .catch(error => res.status(400).json({ message: error.message }));
});

module.exports = router;