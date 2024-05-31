const router = require('express').Router()
const controller = require('../../controllers/BookCirculationController')

const checkBodyIsEmpty = require('../../helpers/checkBodyIsEmpty') 


/**
 * @swagger
 * /api/book-circulation/borrow-book:
 *   post:
 *     summary: Member can borrow books
 *     description: Members may not borrow more than 2 books, Borrowed books are not borrowed by other members, Member is currently not being penalized
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               book_code:
 *                 type: string
 *               member_code:
 *                 type: string
 *             required:
 *               - book_code
 *               - member_code
 *     responses:
 *       201:
 *         description: (book_code is borrowed by (member_code)`
 *       400:
 *         description: Member is penalized, Member has not returned book, Book is not available, Book or Member not found, Content can not be empty!
 *       500:
 *         description: Internal server error
 */
router.post("/borrow-book", checkBodyIsEmpty, controller.borrowBook);


/**
 * @swagger
 * /api/book-circulation/return-book:
 *   post:
 *     summary: Member can return books
 *     description: The returned book is a book that the member has borrowed, If the book is returned after more than 7 days, the member will be subject to a penalty. Member with penalty cannot able to borrow the book for 3 days
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               book_code:
 *                 type: string
 *               member_code:
 *                 type: string
 *             required:
 *               - book_code
 *               - member_code
 *     responses:
 *       201:
 *         description: (book_code) is returned by (member_code) (is_late)
 *       400:
 *         description: Book not borrowed, Book or Member not found, Content can not be empty!
 *       500:
 *         description: Internal server error
 */
router.post("/return-book", checkBodyIsEmpty, controller.returnBook);

module.exports = router