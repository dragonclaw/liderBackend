const Products = require('../models/Product');
const { checkIsPalindrome, isNumber, make_pattern } = require('../utils/utilsFunctions')


exports.getProducts = async (req, res) => {
	try {
		const { queryText } = req.query
		let result = {};
		const isPalindrome = checkIsPalindrome(queryText);
		if (isNumber(queryText)) {
			result = await Products.find({ id: queryText }).lean()
		} else {
			result = await Products.find({ $or: [{ brand: { $regex: make_pattern(queryText), $options: 'ig' } }, { description: { $regex: make_pattern(queryText), $options: 'ig' } }] }).lean()
		}
		if (isPalindrome) {
			result = result.map(singleProduct => {
				const newPrice = ((singleProduct.price * 50) / 100)
				return { ...singleProduct, discount: 50, price: newPrice }
			})
		}

		res.json({
			success: true,
			data: result,
		});
	} catch (err) {
		res.json({ err })
	}

};
