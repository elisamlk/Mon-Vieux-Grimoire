const Book = require("../models/Book");
// Module fs de node.js pour intéragir avec le système de fichiers
const fs = require('fs');
const path = require('path');

exports.createBook = async (req, res, next) => {
    try {
        // Récupérer l'ID de l'utilisateur à partir du middleware d'authentification
        const userId = req.auth.userId;

        // Récupérer les données du corps de la requête
        const bookObj= JSON.parse(req.body.book);
        
        const { title, author, year, genre, ratings } = bookObj;
        let { imageUrl } = bookObj;

        // Vérification si un fichier d'image est téléchargé
        if (req.file) {
            imageUrl = req.file.path; // Chemin du fichier d'image téléchargé
        }

        // Création d'un nouveau livre
        const newBook = new Book({
            userId:userId,
            title:title,
            author:author,
            imageUrl:imageUrl,
            year:year,
            genre:genre,
            ratings:ratings,
            // Initialiser la note à 0
            averageRating:0 
        });

        // Enregistrez le nouveau livre dans la base de données
        const savedBook = await newBook.save();

        res.status(201).json(savedBook); // Renvoie le nouveau livre créé
    } catch (error) {
        console.error(error);
        // Supprimer le fichier d'image téléchargé en cas d'erreur lors de l'enregistrement du livre
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
        res.status(500).json({ message: 'Erreur lors de la création du livre.' });
    }
};


// exports.getAllBooks= (req, res, next) => {
//     Book.find()
//     .then( books => res.status(200).json(books))
//     .catch(error => res.status(404).json({error}));
// };







