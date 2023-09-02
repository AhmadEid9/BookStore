const User = require("../models/users.model")
const Book = require("../models/books.model")

const getBooks = async(req, res) => {
     const {id} = req.params
   
     const books = [];
     const users = await User.find();
     users.forEach( user => {
          books.push(...user.books)
     })

     if(!id) return res.send(books)

     const book = books.find(book=> book._id === id)
     return res.send(book)
}

const postBook = async (req, res) => {
     const {title, author, description, picture} = req.body

     try{
          const book = new Book({
               title,
               author,
               description,
               picture
          });
          
          book.save()
          
          res.send(book)
      } catch (e){
          console.log(e.message);
      }
}

const getMyBooks = async (req, res)=> {
     const user = await User.findById(req.user._id);

     res.send(user.books)
}

module.exports = {getMyBooks, getBooks, postBook}