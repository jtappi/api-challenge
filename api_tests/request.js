const fetch = require('node-fetch');

const getResponse = async url => {
	try {
		const response = await fetch(url);
		let json = {}; 

		// append the status code
		json.status = response.status;

		// If there is no data, return the statusText
		try {
			json.results = await response.json();
		} catch (error) {            
			json.results = response.statusText;
		}
		return json;
	} catch (error) {
		throw error;
	}        
};

module.exports = {
	getResponse
};