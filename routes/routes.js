const index = require('./index');
const products = require('./products');

module.exports = (app) => {
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept',
		);
		next();
	});

	app.use('/', index);
	app.use('/products', products);
	app.use((req, res, next) => {
		res.status(404).json({ error: 'Not Found.' });
		next();
	});
};
