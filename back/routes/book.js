const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const bookCtrl = require('../controllers/book');

// router.get('/', bookCtrl.getAllBooks);
// router.get('/bestrating', bookCtrl.getBestRatingBook);
// router.get('/:id', bookCtrl.getOneBook);
router.post('/', auth, multer, bookCtrl.createBook);
// router.post('/:id/rating', auth, booksCtrl.rateBook);
// router.put('/:id', auth, multer, booksCtrl.modifyBook);
// router.delete('/:id', auth, booksCtrl.deleteBook);


module.exports = router;
