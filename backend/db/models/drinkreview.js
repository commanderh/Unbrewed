'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrinkReview = sequelize.define('DrinkReview', {
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    drinkId: DataTypes.INTEGER
  }, {});
  DrinkReview.associate = function(models) {
		DrinkReview.belongsTo(models.User, { foreignKey: 'userId'});
		DrinkReview.belongsTo(models.Drink, { foreignKey: 'drinkId'});
  };
  return DrinkReview;
};