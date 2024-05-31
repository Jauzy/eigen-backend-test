
const router = require('express').Router() 

router.use('/books', require('./books')) 
router.use('/members', require('./members')) 
router.use('/book-circulation', require('./book-circulation')) 

module.exports = router