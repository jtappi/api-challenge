'use strict';

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('users', {
	first_name: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	last_name: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	email: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	gender: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	avatar: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	street_address: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	city: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	state_abrv: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	country: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	},
	zip: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
			isNumeric: true,
		}
	},
	phone: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: null,
		validate: {
			notEmpty: true,
		}
	}
});

module.exports = User;