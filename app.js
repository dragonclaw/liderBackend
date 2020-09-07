require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');


const app = express();
// ROUTES OF APP
require('./routes/routes')(app);

mongoose.Promise = Promise;

if (process.env.ENVIRONMENT === 'PRODUCTION') {
	mongoose.connect(

		`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`,
	);
}
else {
	mongoose.connect(
		//'mongodb://productListUser:productListPassword@localhost:27017/promotions?authSource=admin'
		'mongodb://productListUser:productListPassword@localhost:27017/promotions?authSource=admin')
}

const db = mongoose.connection;
db.once('open', () => {
	console.log('connection OK!');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
