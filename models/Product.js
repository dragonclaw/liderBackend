const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
	id: { type: Number, required: false },
	brand: { type: String, required: false },
	description: { type: String, required: false },
	image: { type: String, required: false },
	price: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);
