const Book = require("../models/Book");

exports.createBook= (req, res, next) => {
    Book.find()
    .then( books => res.status(200).json(books))
    .catch(error => res.status(404).json({error}));
};

exports.getAllBooks= (req, res, next) => {
    Book.find()
    .then( books => res.status(200).json(books))
    .catch(error => res.status(404).json({error}));
};







