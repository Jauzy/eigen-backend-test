require('dotenv').config()
const error = require('../helpers/errors')
const models = require('../models')
const { Op, fn, col } = require('sequelize');

const memberModel = models.member
const bookCircuModel = models.book_circulation

class MemberController {

    checkMembers = (req, res) => {
        // memberModel.findAll().then(async datas => {
        //     const totalRows = await memberModel.count()
        //     res.send({data:datas, totalRows})
        // }).catch(err => {
        //     error(res, 400, err)
        // });
        const memberAttributes = Object.keys(memberModel.rawAttributes);

        memberModel.findAll({
            attributes: [
                ...memberAttributes.map(attr => [attr, attr]),
                [fn('COUNT', col('book_circulations.bkc_id')), 'book_borrowed']
            ],
            include: [{
                model: bookCircuModel,
                attributes: [],
                where: {
                    return_date: {
                        [Op.is]: null
                    }
                },
                required: false
            }],
            group: ['member.member_id']
        }).then(async members => {
            const totalRows = await memberModel.count()
            res.send({ data: members, totalRows })
        }).catch(err => {
            error(res, 400, err)
        })
    }

}

module.exports = new MemberController()