const postsControllers = require("./posts.controllers")

const getAllPosts = (req, res) => {
    postsControllers
      .findAllPosts()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };
  
  const postPost = (req, res) => {
    const postObj = req.body
    if (postObj.content && postObj.userName && postObj.isPublished) {
      postsControllers.createPost(postObj)
          .then(response => {
              res.status(201).json(response)
          })
          .catch(err => {
              res.status(400).json({message : err.message})
          })  
    } else {
      res.status(400).json({message : 'Missing data'})
    }
  };
  
  const getPostById = (req, res) => {
      const id = req.params.id
  
      postsControllers.findPostById(id)
          .then(data => {
            if(data){
              res.status(200).json(data)
            }else {
              res.status(404).json({message: 'Invalid ID'})
            }
          })
          .catch(err => {
              res.status(404).json({message: err.message})
          })
  }
  //? Modificacion 
  const patchPost = (req, res) => {
    const id = req.params.id 
    const {content,userName,isPublished} = req.body;
  
    postsControllers.updatePost(id, {content,userName,isPublished})
      .then((response) => {
        
        if(response[0]){
          res.status(200).json({
            message: `Post with id: ${id}, edited succesfully!`
          })
        } else {
          res.status(404).json({message: 'Invalid ID'})
        }
      })
      .catch(error => {
        res.status(400).json({message: error.message})
      })
  }
  
  
  const deletePost = (req, res) => {
    const id = req.params.id
    postsControllers.deletePost(id)
      .then((response) => {
        if(response){
          res.status(204).json()
        }else{
          res.status(400).json({message: 'Invalid ID'})
        }
      })
      .catch(err=> {
        res.status(400).json(err)
      })
  }
  
  
  
  module.exports = {
      getAllPosts,
      getPostById,
      postPost,
      patchPost,
      deletePost
  }