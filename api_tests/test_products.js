/* global describe, it */
const assert = require('chai').assert;
const apiCall = require('./request.js');

const url = 'http://localhost:8000/api/products';

describe('Calling the Product API ', () => {
	it('should return all products', async () => {
		const response = await apiCall.getResponse(url);
		assert.isTrue(response.results.length > 1, `Only [${response.results.length}] products were returned. This is less then expected!`);
	});
	it('with a specific ID should return a single product with that ID', async () => {
		const productId = Math.floor(Math.random() * 19) + 1;        
		const response = await apiCall.getResponse(`${url}/${productId}`);
		assert.isTrue(response.results.id === productId, `The response.id [${response.results.id ? response.results.id : 'N\\A'}] does not match the expected id [${productId}]`);
	});
	it('should return a 200 for a valid call', async () => {
		const response = await apiCall.getResponse(url);    
		assert.equal(response.status, '200', `The response.status [${response.status}] does not match the expected 200 status`);
	});
	it('should return a 204 and \'No content\' for a valid call without data', async () => {
		const response = await apiCall.getResponse(`${url}/999`); 
		assert.equal(response.status, '204', `The response.status [${response.status}] does not match the expected 204 status`);
		assert.equal(response.results, 'No Content', `The response message [${response.results}] does not match the expected 'No Content'`);
	});
	it('should return a 500 for an invalid call ', async () => {
		const response = await apiCall.getResponse(`${url}/999abc`); 
		assert.equal(response.status, '500', `The response.status [${response.status}] does not match the expected 500 status`);
	});
});