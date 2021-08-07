const server = require("express").Router();
const {Categoria} = require('../db')

server.post('/', (req, res, next)=>{
    const {name} = req.body
    Categoria.create({
        name: name
    }).then(categoria=>{
        res.json(categoria)
    }).catch(next)
})

server.get('/all', (req, res, next)=>{
    Categoria.findAll()
    .then(categorias =>{
        res.json(categorias)
    }).catch(next)
})


module.exports =server