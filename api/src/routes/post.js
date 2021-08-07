const server = require("express").Router();
const {Post, Categoria, Usuario} = require('../db')
const axios = require('axios')
const {API_BASE_ROUTE} = process.env
var Sequelize = require("sequelize");


server.get('/', (req, res, next)=>{
    Post.findAll()
    .then(post =>{
        res.json(post)
    }).catch(next)
})


server.get('/all/:page/:limit', (req, res, next)=>{
 let offset = req.params.page * req.params.limit
 let limit = req.params.limit
  Post.findAndCountAll({ offset, limit,  order: [
    ['title', 'DESC']
]})
  .then(posts =>{
      if(posts.count === 0 ){
          axios.get(`${API_BASE_ROUTE}/posts`)
          .then(p =>{
              return Promise.all(
                   p.data.map(post =>{
                      return Post.create({
                         title: post.title,
                         body: post.body,   
                      })
                    })
                  ).then(posts=>{
                      res.json(posts)
                  })
              })
            }else{
                res.json(posts)
            }
          }).catch(next)
  })

server.get(`/all`, (req, res, next) => {
    let { query } = req.query;
    query = "%" + query + "%";
    Post.findAll({
      where: {
        [Sequelize.Op.or]: [
          {
            title: {
              [Sequelize.Op.iLike]: query,
            },
          },
        ],
      },
    })
      .then((posts) => {
        res.json(posts);
      })
      .catch(next);
  });



server.post('/:id/addcategorias', (req, res, next)=>{
    const {id} = req.params
    const {categorias} = req.body
    Post.findByPk(id)
    .then(post =>{
        post.setCategoria(categorias)
    }).then(() =>{
        Post.findByPk(id,{include: Categoria})
        .then(respuesta =>{
            res.json(respuesta)
        })
    }).catch(next)
})

server.get('/:id', (req, res, next)=>{
    const {id} = req.params
    Post.findByPk(id,{include: Categoria})
    .then(post =>{
        res.json(post)
    }).catch(next)
})

module.exports = server