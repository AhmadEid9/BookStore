const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/:id?", booksController.getBooks)
router.get("/me", authMiddleware, booksController.getMybooks)

module.exports = router;