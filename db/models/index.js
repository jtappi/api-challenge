'use strict';

const Product = require('./product');
const User = require('./user');
const Review = require('./review');

Product.hasMany(Review);

User.hasMany(Product);
User.hasMany(Review);

Review.belongsTo(User);
Review.belongsTo(Product);

module.exports = {Product, User, Review};
