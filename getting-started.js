#!/usr/bin/env node

const express = require('express');
const { Server } = require('http');
const app = express();

app.get('/', (req, res) => {
    // Run with
    // node ./getting-started.js Hani
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`)
    });
    res.send('Hi!');
});

app.listen(3000, () => console.log('Server read'));