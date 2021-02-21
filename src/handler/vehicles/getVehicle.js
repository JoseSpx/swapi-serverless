'use strict'

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.getVehicle = (event, context, callback) => {
    const params = {
        TableName: 'vehicles',
        Key: {
            id: event.pathParameters.id
        }
    };

    dynamodb.get(params, (error, data) => {
        if (error) {
            callback(new Error(error));
            return;
        }

        const response = data.Item ? {
            statusCode: 200,
            body: JSON.stringify(data.Item)
        } : {
            statusCode: 404,
            body: JSON.stringify({ "message": "Vehicle not found" })
        };

        callback(null, response);
    });

}
