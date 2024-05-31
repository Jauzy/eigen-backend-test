const router = require('express').Router()
const controller = require('../../controllers/BookController')

/**
 * @swagger
 * /api/books/check-books:
 *   get:
 *     summary: Check the book 
 *     description: Shows all existing books and quantities, Books that are being borrowed are not counted
 *     responses:
 *       200:
 *         description: Shows all existing books and quantities, Books that are being borrowed are not counted
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   book_id:
 *                     type: integer
 *                   code:
 *                     type: string
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   stock:
 *                     type: integer
 */
router.get("/check-books", controller.checkBooks);

module.exports = router