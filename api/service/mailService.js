'use strict';

class MailService {

	constructor(mailProvider, parameter) {
		this.mailProvider = mailProvider;
		this.parameter = parameter;
	}

	send() {
		return this.mailProvider.sendEmail(this.createRequest()).promise();
	}

	createRequest() {
        return {
            Destination: {
                ToAddresses:[process.env.recipient]
            },
            Message: {
                Body:{
                    Html: {
                        Charset: 'UTF-8',
                        Data: this.mailTemplate()
                    }
                },
                Subject:{
                    Data: "TRANSACTION EMAIL"
                }
            }, 

            ReturnPath: process.env.sender,
            Source: process.env.sender,
            ConfigurationSetName: 'EMAIL_TRACKING',
            Tags : [
               {
                  Name:'message_tag',
                  Value: 'message',
               }
            ]
        }
	}

    mailTemplate() {
        return '◆ USERNAME IS ：'+ this.parameter.username +'</h3><h3> ◆ EMAIL IS ：'+ this.parameter.email
    }
}

module.exports = MailService;