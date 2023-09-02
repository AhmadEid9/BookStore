const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/:id?", booksController.getBooks)
router.get("/me", authMiddleware, booksController.getMyBooks)
router.post("/create-book", booksController.postBook)


module.exports = router;