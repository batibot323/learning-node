#!/usr/bin/env node

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`What's your age? `, age => {
    console.log(`You're ${age} years old.`);
    readline.close();
})
