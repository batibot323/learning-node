#!/usr/bin/env node

const food = require('./food');

(function main() {
    console.log(`${food.name} is ${food.rating}/10.`);
})();