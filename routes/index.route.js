const { getAllBooks, createBook } = require('../controllers/book.controller');

const router = require('express').Router();

// Get All
router.get('/books', getAllBooks);
// Create Book
router.post('/book', createBook);
// Get Detail

// Update

// Delete

module.exports = router;