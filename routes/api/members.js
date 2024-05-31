const router = require('express').Router()
const controller = require('../../controllers/MemberController')

/**
 * @swagger
 * /api/members/check-members:
 *   get:
 *     summary: Member check 
 *     description: Shows all existing members, The number of books being borrowed by each member
 *     responses:
 *       200:
 *         description: Shows all existing members, The number of books being borrowed by each member
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   member_id:
 *                     type: integer
 *                   code:
 *                     type: string
 *                   name:
 *                     type: string
 *                   penalized_until:
 *                     type: string
 *                   book_borrowed:
 *                     type: integer
 */
router.get("/check-members", controller.checkMembers);

module.exports = router