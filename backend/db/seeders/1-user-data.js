'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				email: 'demo@user.io',
				username: 'Demo-lition',
				hashedPassword: bcrypt.hashSync('password'),
			},
			{
				email: faker.internet.email(),
				username: 'FakeUser1',
				hashedPassword: bcrypt.hashSync(faker.internet.password()),
			},
			{
				email: faker.internet.email(),
				username: 'FakeUser2',
				hashedPassword: bcrypt.hashSync(faker.internet.password()),
			},
			{
				email: 'bobalover@boba.io',
				username: 'bobalover',
				hashedPassword: bcrypt.hashSync('boba'),
			},
			{
				email: 'abg@boba.io',
				username: 'abg4lyfe',
				hashedPassword: bcrypt.hashSync('boba'),
			},
			{
				email: 'ricer@boba.io',
				username: 'ricediskeyboard',
				hashedPassword: bcrypt.hashSync('boba'),
			},
			{
				email: 'nobobajusttea@boba.io',
				username: 'bobabutnoboba',
				hashedPassword: bcrypt.hashSync('boba'),
			},
			{
				email: 'thgquoc@boba.io',
				username: 'firstdrinkoftheday',
				hashedPassword: bcrypt.hashSync('boba'),
			},
		], {});
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete('Users', {
			username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'bobalover', 'abg4lyfe', 'ricediskeyboard', 'bobabutnoboba', 'firstdrinkoftheday'] }
		}, {});
	}
};