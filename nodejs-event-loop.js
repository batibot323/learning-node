#!/usr/bin/env node

const bar = () => console.log('bar');
const barHani = () => console.log(`This is hani's bar.`);

const baz = () => console.log('baz');

// Adding another method with a whole set of setTimeout(), Promise, and nextTick()
const hani = () =>  {
    process.nextTick(() => {
        console.log('Use of nextTick() - hani');
    })
    setTimeout(barHani, 0);
    new Promise((resolve, reject) => {
        resolve('should be right after baz, before bar - hani')
    }).then(resolve => console.log(resolve));
    console.log('hani');
}

const foo = () => {
    // Moving setTimeout and Promise at the start would still put them after the function.
    process.nextTick(() => {
        console.log('Use of nextTick()');
    })
    setTimeout(bar, 0);
    new Promise((resolve, reject) => {
        resolve('should be right after baz, before bar')
    }).then(resolve => console.log(resolve));
    console.log('foo');
    baz();
}

foo();
hani(); // This executes even before the Promise of foo().