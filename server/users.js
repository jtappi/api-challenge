const db = require('../db'); //this is required
const Review = require('../db/models/review');
const Product = require('../db/models/product');
const User = require('../db/models/user');

const router = require('express').Router();

router.get('/', function(req, res, next) {
	User.findAll({
		include: [Review]
	})
		.then(result => {
			res.status(200).send(result);
		})
		.catch(next);
});

router.get('/:id', function(req, res, next) {
	User.findOne({
		where:{id:req.params.id},
		include: [Review]
	})
		.then(result => {
			if (result === null)
				res.status(200).send(console.error(result));
			else
				res.status(500).send(result);
		})
		.catch(next);
});

router.get('/:id/reviews', function(req, res, next) {
	User.findOne({
		where:{id:req.params.id},
		include: [Review]
	})
		.then(result => {
			if (result === null)
				res.status(500).send(console.error(result));
			else
				res.status(200).send(result.reviews);
		})
		.catch(next);
});

router.get('/:id/product', function(req, res, next) {
	User.findOne({
		where:{id:req.params.id},
		include: [Product]
	})
		.then(result => {
			if (result === null)
				res.status(500).send();
			else
				console.log(result.product);
			res.status(500).send(result.products);
		})
		.catch(next);
});



module.exports = router;
