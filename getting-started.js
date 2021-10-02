#!/usr/bin/env node

const express = require('express');
const { Server } = require('http');
const app = express();

app.get('/', (req, res) => {
    // Run with
    // node ./getting-started.js --name=Hani --age=30
    const args = require('minimist')(process.argv.slice(2))
    console.log(args['name']);
    console.log(args['age']);
    res.send('Hi!');
});

app.listen(3000, () => console.log('Server read'));