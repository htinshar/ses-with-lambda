'use strict';
var aws = require('aws-sdk');

var ses = new aws.SES({
	region: process.env.region,
	accessKeyId: process.env.access_key_id,
	secretAccessKey: process.env.access_key_secret
});
var MailService = require('../service/mailService.js');

module.exports.send = (event, context, callback) => {
	// sendEmail
	var mail = new MailService(ses, event.queryStringParameters);

	mail.send().then(function(data){
		callback(null, generateResponse(200, data));
	}).catch(function(error){
		callback(null, generateResponse(500, error));
	});
}

function generateResponse(status, message, event) {
	return {
		statusCode: status,
		body: JSON.stringify({
			message: message,
		}),
	};
}