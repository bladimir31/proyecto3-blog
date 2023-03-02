
const Posts = require("../models/posts.models")

let base = 1

const findAllPosts = async() => {
    //? Your code here:
    const data = await Posts.findAll() //? Obtener todos los post
    
    return data
}

const findPostById = async(id) => {
    //? Your code here:
    const data = await Posts.findOne({ //Obtener un usuario por id
        where: {
          id : id
        }
      })
      return data 
}

const createPost = async(postObj) => {
    //? Your code here:
    const newPost = {
        id: base++,
        content: postObj.content ,
        userName: postObj.userName ,
        isPublished:postObj.isPublished 
      }
      const data = await Posts.create(newPost) //Crear un nuevo post

      return data
}

const updatePost = async(id,postObj) => {
    //? Your code here:
    const response = await Posts.update(postObj, { //Actualizar un post
        where: {
          id: id
        }
      })
      return response
}

const deletePost = async(id) => {
    //? Your code here:
    const data = await Posts.destroy({ //Eliminar un post
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
