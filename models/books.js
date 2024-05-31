
module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("book", {
        book_id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        }, 
        code : {
            type: Sequelize.STRING, 
        },  
        title : {
            type: Sequelize.STRING, 
        },  
        author : {
            type: Sequelize.STRING, 
        },  
        stock : {
            type: Sequelize.INTEGER, 
        },  
    }, {timestamps: false});
    Model.associate = function(models) {
        // Model associate
    };
    return Model;
};