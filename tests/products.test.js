const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

it('Should return index', (done) => {
	request(app)
		.get('/')
		.expect('Content-Type', /json/)
		.end(done)
})

it('Should return Products Object with Palindrome Discount', function (done) {
	request(app)
		.get('/products?queryText=oqo')
		.expect(200)
		.expect((res) => {
			expect(res.body.data[0]).to.have.property('discount')
		})
		.end(done)
})

it('Should return Products Object with NO Palindrome Discount', function (done) {
	request(app)
		.get('/products?queryText=oq')
		.expect(200)
		.expect((res) => {
			expect(res.body.data[0]).to.not.have.property('discount')
		})
		.end(done)
})

it('Should return empty data', function (done) {
	request(app)
		.get('/products?queryText=oqoo')
		.expect(200)
		.expect((res) => {
			expect(res.body.data).to.be.empty
		})
		.end(done)
})