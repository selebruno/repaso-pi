const server = require('express').Router()
const {Usuario} = require('../db')
const axios = require ('axios')
const {API_BASE_ROUTE} = process.env

server.get('/all', (req, res, next)=>{
    Usuario.findAll()
    .then(usuarios =>{
        usuarios.length > 0 ? res.json(usuarios)
        :
        axios
        .get(`${API_BASE_ROUTE}/users`)
        .then(usuarios =>{
            return Promise.all(
                usuarios.data.map(usuario =>{
                    return Usuario.create({
                        name: usuario.name,
                        username: usuario.username,
                        email: usuario.email,
                    })
                })
            ).then(respuesta=>{
                res.json(respuesta)
            })
        })
    }).catch(next)
  })

module.exports = server

