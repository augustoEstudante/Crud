const Router = require ("express").Router;
const router = Router();

// crud

router.get("/Clientes",(req, res)=>{
    res.send("Clientes consultados com sucesso")
})

router.post("/Cliente",(req, res)=>{
    res.send("Clientes cadrastado com sucesso")
    
})

router.put("/Clientes/:id",(req, res)=>{
    const {id} = req.params;
    res.send("Clientes atualizado com sucesso")
})

router.delete("/Clientes/:id",(req, res)=>{
    const {id} = req.params;
    res.send("Clientes deletado com sucesso")
})

module.exports = router;

