#!/usr/bin/env node

const otherFile = require('./food');
const food = otherFile.myType;

(function main() {
    console.log(`${food.name} is ${food.rating}/10.`);
})();