
const router = require('express').Router()

const postsServices = require('./posts.services')



router.get('/posts', postsServices.getAllPosts) 
router.post('/posts', postsServices.postPost) 

router.get('/posts/:id', postsServices.getPostById) 
router.delete('/posts/:id', postsServices.deletePost) 
router.patch('/posts/:id', postsServices.patchPost) 


module.exports = router