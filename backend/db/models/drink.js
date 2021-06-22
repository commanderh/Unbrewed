'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    creatorId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Drink.associate = function(models) {
		Drink.belongsTo(models.User, { foreignKey: 'creatorId'});
		Drink.hasMany(models.DrinkReview, { foreignKey: 'drinkId' })
  };
  return Drink;
};