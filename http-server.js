#!/usr/bin/env node

const https = require('https');

const getOptions = {
    hostname: 'example.com',
    port: 443,
    path: '/todos',
    method: 'GET'
};

const getRequest = https.request(getOptions, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
    })
});

getRequest.on('error', error => {
    console.log('I encountered an error.');
    console.error(error);
})

getRequest.end();

const postData = new TextEncoder().encode(
    JSON.stringify({
        todo: 'Buy the milk 🍼'
    })
);

const postOptions = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
}

const postRequest = https.request(postOptions, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
    })
})

postRequest.on('error', error => {
    console.error(error);
})

postRequest.write(postData);
postRequest.end();