const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book');

router.get('/', bookCtrl.getAllBook);
router.get('/bestrating', bookCtrl.getBestRatingBook);
router.get('/:id', bookCtrl.getOneBook);
router.post('/', auth, multer, booksCtrl.createBook);
router.post('/:id/rating', auth, booksCtrl.rateBook);
router.put('/:id', auth, multer, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);


module.exports = router;
