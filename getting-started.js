#!/usr/bin/env node

const express = require('express');
const { Server } = require('http');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    console.log(process.env.USER_ID);
    console.log(process.env.USER_KEY);
    console.log(process.env.NODE_ENV);
    res.send('Hi!');
});

process.on('SIGTERM', () => {
    Server.close(() => {
        console.log('Process terminated');
    });
});

app.listen(3000, () => console.log('Server read'));