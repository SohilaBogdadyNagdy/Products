var mongoose = require('mongoose');
var schema = mongoose.Schema;
var data = require('../data/products')

var Products = new schema({
	name: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	image: {
		type: String
	},
	category:{
		id: {
			type:Number,
			min:1,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	}


});

module.exports = mongoose.model('Products', Products);
