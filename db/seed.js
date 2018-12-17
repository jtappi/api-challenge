const db = require('../db');

const seedProducts = () => db.Promise.map([
	{title: 'Hats',category: ['Clothes','Accessories'], current_price: 16, description: 'Fedora with a feather', availability: true, inventory: 100, promo_id: 1},
	{title: 'Ski Suits',category: ['Athletics', 'Clothes'], current_price: 11, description: 'Full body ski suit', availability: false, inventory: 5, promo_id: 1},
	{title: 'Fanny Pack',category: ['Accessories'], current_price: 12, description: 'Bright neon in all colors', availability: true, inventory: 64, promo_id: 1},
	{title: 'Chuck Taylors',category: ['Clothes','Shoes'], current_price: 15, description: 'A variation on a classsic', availability: false, inventory: 35},
	{title: 'Hairspray',category: ['Beauty'], current_price: 41, description: 'Full of CFCs', availability: true, inventory: 22, promo_id: 2},
	{title: 'Socks',category: ['Clothes'], current_price: 51, description: 'Big wooly socks', availability: true, inventory: 21},
	{title: 'Wigs', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Business in the front, party in the back', availability: false, inventory: 100, promo_id: 2},
	{title: 'Chanel', category: ['Beauty'], current_price: 49, description: 'Chanel loose powder', availability: true, inventory: 100, promo_id: 2},
	{title: 'Cosmetics', category: ['Beauty'], current_price: 31, description: 'Revlon violet pink set', availability: true, inventory: 100, promo_id: 2},
	{title: 'Covergirl', category: ['Beauty'], current_price: 21, description: 'Cosmetics for the young generation', availability: false, inventory: 100, promo_id: 2},
	{title: 'Dior', category: ['Beauty'], current_price: 49, description: 'Luxury for your face', availability: true, inventory: 100, promo_id: 2},
	{title: 'Dolls', category: ['Accessories'], current_price: 9, description: 'For your room', availability: false, inventory: 100, promo_id: 2},
	{title: 'HighHeels', category: ['Shoes'], current_price: 27, description: 'Edge on your heel', availability: true, inventory: 100, promo_id: 2},
	{title: 'PinkSuit', category: ['Accessories', 'Clothes'], current_price: 22, description: 'Everything for your pink day', availability: false, inventory: 100, promo_id: 2},
	{title: 'Technicolor', category: ['Accessories', 'Clothes'], current_price: 31, description: 'Freedom', availability: false, inventory: 100, promo_id: 2},
	{title: 'Sneakers', category: ['Shoes', 'Athletics'], current_price: 62, description: 'Comply with your style', availability: false, inventory: 100, promo_id: 2},
	{title: 'FlyWatch', category: ['Accessories'], current_price: 20, description: 'What time is it now? 19: 08 ! ', availability: false, inventory: 100, promo_id: 2},
	{title: 'ThatWig', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Party people', availability: false, inventory: 100, promo_id: 1},
	{title: 'Training set', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
	{title: 'Training suit for couple', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
], product => db.model('products').create(product));

const seedReviews = () => db.Promise.map([
	{rating: 1, review_text: 'awful',product_id:5, user_id:5},
	{rating: 1, review_text: 'if you have too much extra money ',product_id:1},
	{rating: 5, review_text: 'the best!',product_id:2},
	{rating: 2, review_text: 'waste of money',product_id:3, user_id:4},
	{rating: 3, review_text: 'can be better',product_id:4},
	{rating: 3, review_text: 'should be better',product_id:6, user_id:3},
	{rating: 4, review_text: 'good price',product_id:7, user_id:1},
	{rating: 4, review_text: 'just like description',product_id:7, user_id:1}
], review => db.model('reviews').create(review));


const seedUsers = () => db.Promise.map([
	{first_name: 'Otes',last_name: 'Gooke', email: 'ogooke0@google.de', gender: 'Male',avatar: 'https://robohash.org/sitvoluptasincidunt.png?size=100x100&set=set1',
		street_address: '3 Northwestern Point',
		city: 'Pittsburgh',
		state_abrv: 'PA',
		country: 'United States',
		zip: '15261',
		phone: '412.433.7480',
		product_id:7
	},
	{
		first_name: 'Augustus',
		last_name: 'Ortells',
		email: 'aortells1@hostgator.com',
		gender: 'Male',
		avatar: 'https://robohash.org/laudantiumreiciendisasperiores.png?size=100x100&set=set1',
		street_address: '1 Toban Plaza',
		city: 'Vancouver',
		state_abrv: 'WA',
		country: 'United States',
		zip: '98687',
		phone: '3609715438',
		product_id:7
	},
	{
		first_name: 'Elysia',
		last_name: 'Done',
		email: 'edone2@dell.com',
		gender: 'Female',
		avatar: 'https://robohash.org/doloresfacilisquia.png?size=100x100&set=set1',
		street_address: '7537 Prairieview Lane',
		city: 'Spring',
		state_abrv: 'TX',
		country: 'United States',
		zip: '77386',
		phone: '(832)790-4503',
		product_id:6
	},
	{
		first_name: 'Meade',
		last_name: 'Milmore',
		email: 'mmilmore3@arizona.edu',
		gender: 'Male',
		avatar: 'https://robohash.org/dignissimosvoluptatemmodi.png?size=100x100&set=set1',
		street_address: '8203 Larry Circle',
		city: 'El Paso',
		state_abrv: 'TX',
		country: 'United States',
		zip: '88530',
		phone: '1.915.483.5726',
		product_id:3
	},
	{
		first_name: 'Igor',
		last_name: 'Pacher',
		email: 'ipacher4@nba.com',
		gender: 'Male',
		avatar: 'https://robohash.org/ipsumenimquia.png?size=100x100&set=set1',
		street_address: '45676 Del Sol Place',
		city: 'Columbus',
		state_abrv: 'OH',
		country: 'United States',
		zip: '43204',
		phone: '614-355-1879',
		product_id:5
	}
], user => db.model('users').create(user));


db.didSync
	.then(() => db.sync({force: true}))
	.then(seedProducts)
	.then(products => console.log(`Seeded ${products.length} products OK`))
	.then(seedUsers)
	.then(users => console.log(`Seeded ${users.length} users OK`))
	.then(seedReviews)
	.then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
	.catch(error => console.error(error))
	.finally(() => db.close());
