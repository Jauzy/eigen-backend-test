
module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("member", {
        member_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
        },
        code : {
            type: Sequelize.STRING, 
        }, 
        name : {
            type: Sequelize.STRING, 
        },
        penalized_until: {
            type: Sequelize.DATE,
        }
    }, {timestamps: false});
    Model.associate = function(models) {
        // Model associate
        Model.hasMany(models.book_circulation, { foreignKey: 'bkc_member_id', targetKey: 'member_id' });
    };
    return Model;
};