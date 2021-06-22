'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Drinks', [
			{ name: 'Classic Milk Tea', content: 'A deliciously cold drink., sweet, milky with a strong taste of creamy black tea.', creatorId: '4', imageUrl: 'https://share-tea-v1623360461.websitepro-cdn.com/wp-content/uploads/2019/05/2019NewPP_MilkTea_ClassicMilkTeaBlack-2-1.png'},
			{ name: 'Wintermelon Tea', content: 'A cold drink of Winter Melon with a good amount of sweetnes and fruity flavor', creatorId:'7', imageUrl: 'https://share-tea-v1623360461.websitepro-cdn.com/wp-content/uploads/2019/05/20201021_%E6%B5%B7%E5%A4%96PSlogo_BrewedTea_WintermelonTea-5-scaled.jpg'},
			{ name: 'Hokkaido Milk Tea', content: 'Milky cold drink with black tea and hokkaido flavor, so creamy added by boba pearls making a good mixture of sweetness', creatorId:'8', imageUrl: 'https://share-tea-v1623360461.websitepro-cdn.com/wp-content/uploads/2019/05/2019NewPP_MilkTea_ClassicPearlMilkTeaBlack-2-1.png'},
			{ name: 'Taro Milk Tea', content: 'Taro milk tea lovers describe its flavor as sweet and nutty. When taro is cooked, it tastes much similar to sweet potatoes.', creatorId:'6', imageUrl: 'http://www.gong-cha-sg.com/wp-content/uploads/2017/11/0014_%E8%8A%8B%E9%A6%99%E5%A5%B6%E8%8C%B6-Taro-Drink.png'},
			{ name: 'Oolong Milk Tea', content: 'Milk Oolong tea is a Taiwanese tea known for its creamy and buttery taste. Real Milk Oolong tea provides a sweet flowery scent and a taste of sweet butter and milk through gently roasted and rolled tea leaves.', creatorId:'6', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/cHqRZB7ljsu3GIuasiz28A/o.jpg'},
			{ name: 'Thai Tea', content: 'Thai Tea is is made from strongly-brewed black tea, often spiced with ingredients such as star anise, crushed tamarind, cardamom, and occasionally others as well (often making this beverage a favorite among masala chai tea fans). This brew is then sweetened with sugar and sweetened condensed milk, and served over ice.', creatorId:'1', imageUrl: 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_Thai_Tea.jpg'},
			{ name: 'Brown Sugar Milk Tea', content: 'This is a bubble tea variant that has no tea in it, just fresh milk, brown sugar syrup and tapioca pearls. The tapioca pearls are cooked on low heat in brown sugar syrup so they absorb all that smoky, caramelly flavour, and these are then topped off with cold fresh milk.', creatorId:'4', imageUrl: 'https://hw-media.herworld.com/public/2018/11/story/nz-bubbletea-091019.jpg'},
			{ name: 'Jasmine Milk Tea', content: 'In general, jasmine tea has a sweet, perfumed, fresh, blossomed, dewy, bouquet, fragrant, delicate and subtle taste', creatorId:'5', imageUrl: 'https://7leavescafe.com/wp-content/uploads/Drinks_Cold_JasmineMilkTea.jpg'},
			{ name: 'Mango Cream Smoothie', content: 'Mango flavored cold drink with ice cream sweetness, so delicious and refreshing.', creatorId:'2', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/PzgMB5etbUp-dO3u7ZpyHQ/o.jpg'},
			{ name: 'Guava Green Tea', content: 'An aromatic and smooth way to enjoy a cup of tropical tea. Made with Green Tea leaves, Guava Leaves, Panax Ginseng & Natural Flavoring. Our Guava Ginseng tea is rich in antioxidants and has a deliciously smooth flavor and aroma.', creatorId:'7', imageUrl: 'https://teabeartea.com/wp-content/uploads/2020/06/red-guava-2-min.png'},
		], {});
	},

	down: (queryInterface, Sequelize) => {
		/*
			Add reverting commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkDelete('People', null, {});
		*/
	}
};
