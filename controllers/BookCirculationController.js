require('dotenv').config()
const error = require('../helpers/errors')
const models = require('../models')
const Op = require('sequelize').Op
const moment = require('moment');

const bookModel = models.book
const memberModel = models.member
const bookCircuModel = models.book_circulation

class BookCirculationController {
    borrowBook = async (req, res) => {
        try {
            let book = await bookModel.findOne({
                where: { code: req.body.book_code }
            })
            let member = await memberModel.findOne({
                where: { code: req.body.member_code }
            })

            if(!book || !member){
                return res.status(400).json('Book or Member not found')
            }

            if(book.stock === 0){
                return res.status(400).json('Book is not available')
            }

            let not_returned = await bookCircuModel.findAll({ 
                where: {
                    bkc_member_id: member.member_id,
                    return_date: {
                        [Op.eq] : null
                    }
                }
            }) 

            if(not_returned.length > 1){
                return res.status(400).json('Member has not returned book')
            }

            let is_penalized = member.penalized_until ? moment(member.penalized_until).diff(moment(), 'days') > 0 : false
            if(is_penalized){
                return res.status(400).json('Member is penalized')
            }

            bookCircuModel.create({
                bkc_book_id: book.book_id,
                bkc_member_id: member.member_id,
                borrow_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            })

            book.stock = book.stock - 1
            book.save()

            res.send(`${book.book_code} is borrowed by ${member.member_code}`)
        } catch (err) {
            error(res, 400, err)
        }
    }

    returnBook = async (req, res) => {
        try { 
            let book = await bookModel.findOne({
                where: { code: req.body.book_code }
            })
            let member = await memberModel.findOne({
                where: { code: req.body.member_code }
            })

            if(!book || !member){
                return res.status(400).json('Book or Member not found')
            }

            let circule = await bookCircuModel.findOne({ 
                where: {
                    bkc_member_id: member.member_id,
                    bkc_book_id: book.book_id,
                    return_date: null, 
                }
            }) 

            if(!circule){
                return res.status(400).json('Book not borrowed')
            }

            circule.return_date = moment().format('YYYY-MM-DD HH:mm:ss')
            circule.save()
            book.stock = book.stock + 1
            book.save();

            let is_late = false
            if(moment(circule.return_date).diff(moment(circule.borrow_date), 'days') > 7){
                is_late = true
                member.penalized_until = moment().add(3, 'days').format('YYYY-MM-DD HH:mm:ss')
                member.save()
            }

            res.send(`${book.book_code} is returned by ${member.member_code} ${is_late ? 'late' : ''}`)

        } catch (err) {
            error(res, 400, err)
        }
    }

}

module.exports = new BookCirculationController()