const { Book } = require('../models');

const getAllBooks = async (req, res) => {
    try {
        const data = await Book.findAll();

        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
};

const createBook = async (req, res) => {
    try {
        const { title, author, stock, description } = req.body;
        const data = await Book.create({
            title,
            author,
            stock,
            description
        });

        res.status(201).json({
            status: 'success',
            data,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
}

module.exports = {
    getAllBooks,
    createBook
}