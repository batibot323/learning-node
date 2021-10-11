#!/usr/bin/env node

const http = require('http');
const https = require('https');

// const port = process.env.port || 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello, World!</h1>');
// })

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// })

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