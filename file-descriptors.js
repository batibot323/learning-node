#!/usr/bin/env node

const fs = require('fs')

fs.stat('./quotes.txt', (err, stats) => {
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
})



const stats = fs.statSync('./quotes.txt')
console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.isSymbolicLink());
console.log(stats.size);