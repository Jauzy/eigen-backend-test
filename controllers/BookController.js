require('dotenv').config()
const error = require('../helpers/errors')
const models = require('../models')
const Op = require('sequelize').Op 

const bookModel = models.book

class BookController {

    checkBooks = (req, res) => {   
        bookModel.findAll({ 
            where: {
                stock : {
                    [Op.gt] : 0
                }
            }
        }).then(async datas => {
            const totalRows = await bookModel.count()
            res.send({data:datas, totalRows})
        }).catch(err => {
            error(res, 400, err)
        });
    } 

}

module.exports = new BookController()