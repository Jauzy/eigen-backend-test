
module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("book_circulation", {
        bkc_id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        }, 
        bkc_book_id : {
            type: Sequelize.INTEGER, 
        },  
        bkc_member_id: {
            type: Sequelize.INTEGER, 
        },
        borrow_date : {
            type: Sequelize.DATE, 
        },  
        return_date : {
            type: Sequelize.DATE, 
        },   
    }, {timestamps: false});
    Model.associate = function(models) {
        // Model associate
        // Model.belongsTo(models.book, { foreignKey: 'bkc_book_id', targetKey: 'book_id' });
        // Model.belongsTo(models.member, { foreignKey: 'bkc_member_id', targetKey: 'member_id' });
    };
    return Model;
};