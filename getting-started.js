#!/usr/bin/env node

const express = require('express');
const { Server } = require('http');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi!');
    process.kill(process.pid, 'SIGTERM');
});

app.listen(3000, () => console.log('Server read'));

process.on('SIGTERM', () => {
    Server.close(() => {
        console.log('Process terminated');
    });
});