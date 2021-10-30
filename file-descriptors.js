#!/usr/bin/env node

const fs = require('fs')

fs.open('./quotes.txt', 'r', (err, fd) => {
    console.log(fd);
})