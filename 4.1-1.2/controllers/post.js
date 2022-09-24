const postRouter =  require('express').Router()
const Post = require('../models/post')

postRouter.get('/', (request, response, next) => {
  Post.find({}).then(posts => {
    response.json(posts)
  }).catch(err => {
    next(err)
  })
})


postRouter.post('/', (request, response, next) => {
  const body = request.body

  const post = new Post({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  })

  post.save().then(savedPost => {
    response.json(savedPost)
  }).catch(error => {
    next(error)
  })
})

module.exports = postRouter;