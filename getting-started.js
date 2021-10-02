#!/usr/bin/env node

const express = require('express');
const { Server } = require('http');
const app = express();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`What's your age?`, age => {
    console.log(`You're ${age} years old.`);
    readline.close();
})

app.get('/', (req, res) => {
    res.send('Hi!');
});

app.listen(3000, () => console.log('Server read'));