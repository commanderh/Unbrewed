'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING,
				unique:true
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
				unique:true
			},
			hashedPassword: {
				allowNull: false,
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};