#!/usr/bin/env node

const axios = require('axios')
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 4200;

axios
    .post('http://localhost:4200/todos', {
        todo: 'Buy the milk'
    })
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error.code);
    })

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/todos', (req, res) => {
    console.log(req.body.todo);
})

app.get('/', (req, res) => {
    console.log('get');
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});