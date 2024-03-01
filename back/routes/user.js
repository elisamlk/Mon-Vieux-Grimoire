// const express = require('express');
// const router = express.Router();
// // const bcrypt = require('bcrypt');

// // Importer le modèle User

// // A importer dans le fichier controllers
// const User = require('../models/user');

// // const userCtrl = require('../controllers/user');



// router.post('/signup', async (req, res) => {
//   // Extraction des données de la requête
//   const { email, password } = req.body;

//   // Vérification si l'utilisateur existe déjà
//   User.findOne({ email })
//     .then(existingUser => {
//       if (existingUser) {
//         return res.status(400).json({ message: 'Cet utilisateur existe déjà.' });
//       }

//       // Hachage du mot de passe
//       // return bcrypt.hash(password, 10);
//     })
//     .then(hashedPassword => {
//       // Création d'un nouvel utilisateur
//       const newUser = new User({ email, password: hashedPassword });
//       return newUser.save();
//     })
//     .then(newUser => {
//       // Réponse avec l'utilisateur créé
//       res.status(201).json({ message: 'Utilisateur créé avec succès.', user: newUser });
//     })
//     .catch(error => {
//       res.status(500).json({ message: error.message });
//     });
// });

// // router.post("/signup", userCtrl.signup);
// // router.post("/login", userCtrl.login);

// module.exports = router;



const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;