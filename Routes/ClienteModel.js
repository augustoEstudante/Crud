const connection = require('../database/conexao');

class ClienteModel {
  criar(novoCliente) {
    const sql = "insert into clientes set ?";
    return new Promise((resolve, reject) => {
      connection.query(sql, novoCliente, (error, resultado) => {
        if (error) {
          console.log("Erro ao criar cliente");
          console.log(error.message);
          reject(error);
        }
        console.log("Cliente criado com sucesso");
        resolve({ id: resultado.insertId, ...novoCliente });
      });
    });
  }

  listar() {
    const sql = "select * from clientes";
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, resultados) => {
        if (error) {
          console.log("Erro ao listar clientes");
          console.log(error.message);
          reject(error);
        }
        console.log("Clientes listados com sucesso");
        resolve(resultados);
      });
    });
  }

  atualizar(clienteAtualizado, id) {
    const sql = "update clientes set ? where id=?";
    return new Promise((resolve, reject) => {
      connection.query(sql, [clienteAtualizado, id], (error, resposta) => {
        if (error) {
          console.log("Erro ao atualizar cliente");
          console.log(error.message);
          reject(error);
        }
        console.log("Cliente atualizado com sucesso");
        resolve(resposta);
      });
    });
  }

  deletar(id) {
    const sql = "delete from clientes where id=?";
    return new Promise((resolve, reject) => {
      connection.query(sql, [id], (error, resposta) => {
        if (error) {
          console.log("Erro ao deletar cliente");
          console.log(error.message);
          reject(error);
        }
        console.log("Cliente deletado com sucesso");
        resolve({ message: 'Cliente deletado com sucesso' });
      });
    });
  }
}

module.exports = new ClienteModel();