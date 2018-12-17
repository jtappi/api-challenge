/* global describe, it */
const assert = require('chai').assert;
const apiCall = require('./request.js');

const url = 'http://localhost:8000/api/reviews';

describe('Calling the Review API ', () => {
	it('should return all reviews', async () => {
		const response = await apiCall.getResponse(url);      
		assert.isAtLeast(response.results.length, 2, `Only ${response.results.length} reviews were returned. This is less then expected!`);
	});    
	it('with a specific ID should return a single review with that ID', async () => {
		const reviewId = Math.floor(Math.random() * 9) + 1;
		const response = await apiCall.getResponse(`${url}/${reviewId}`);
		assert.isObject(response.results, 'The response should have contained a single object!');
		assert.strictEqual(response.results.id, reviewId, `The response.id [${response.results.id ? response.results.id : 'Response did not return an ID!'}] does not match the expected id [${reviewId}].`);
	});
	it('should return a 200 for a valid call', async () => {
		const response = await apiCall.getResponse(url);    
		assert.equal(response.status, '200', `The response.status [${response.status}] does not match the expected 200 status`);
	});
	it('should return a 204 and \'No content\' for a valid call without results', async () => {
		const response = await apiCall.getResponse(`${url}/999`); 
		assert.equal(response.status, '204', `The response.status [${response.status}] does not match the expected 204 status`);
		assert.equal(response.results, 'No Content', `The response message [${response.results}] does not match the expected 'No Content'`);
	});
	it('should return a 500 for an invalid call', async () => {
		const response = await apiCall.getResponse(`${url}/abc`); 
		assert.equal(response.status, '500', `The response.status [${response.status}] does not match the expected 500 status`);        
	});
	it('should return a review with a rating', async () => {
		const response = await apiCall.getResponse(`${url}/6`);        
		assert.isNotNull(response.results.rating, 'response.results.rating did not return a rating');
	});    
	it('should return a review with a userId', async () => {
		const response = await apiCall.getResponse(`${url}/8`);        
		assert.isNotNull(response.results.user_id, 'response.results.user_id did not return a user_id');
	});
	it('should return a review without a userId', async () => {
		const response = await apiCall.getResponse(`${url}/3`);        
		assert.isNull(response.results.user_id, 'response.results.user_id should not contain a user_id');
	});
	it('should return a review with a productId', async () => {
		const response = await apiCall.getResponse(`${url}/4`);        
		assert.isNotNull(response.results.product_id, 'rresponse.results.product_id did not return a product_id');
	});
	it('should return a review without a productId', async () => {
		const response = await apiCall.getResponse(`${url}/9`);        
		assert.isNull(response.results.product_id, 'response.results.product_id should not contain a product_id');
	});
	it('should return a review that contains review_text', async () => {
		const reviewId = Math.floor(Math.random() * 9) + 1;
		const response = await apiCall.getResponse(`${url}/${reviewId}`);
		assert.isNotNull(response.results.review_text, `Review ID [${reviewId}] does not contain review_text!`);
	});    
});

describe('Validate that a Rating ', () => {
	it('should not be lower than 0', async () => {
		const reviewId = Math.floor(Math.random() * 9) + 1;
		const response = await apiCall.getResponse(`${url}/${reviewId}`);
		assert.isAtLeast(response.results.rating, 0, `The actual rating of [${response.results.rating}] is lower then the allowed value of 1!`);
	});
	it('should not be higher than 5', async () => {
		const reviewId = Math.floor(Math.random() * 9) + 1;
		const response = await apiCall.getResponse(`${url}/${reviewId}`);
		assert.isAtLeast(response.results.rating, 1, `The actual rating of [${response.results.rating}] is higher then the allowed value of 5!`);
	});
	it('should always return an integer', async () => {
		const reviewId = Math.floor(Math.random() * 9) + 1;
		const response = await apiCall.getResponse(`${url}/${reviewId}`);
		assert.isTrue(Number.isInteger(response.results.rating), 'The response.results.rating value is not an Integer!');
	});
});
