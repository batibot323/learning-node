#!/usr/bin/env node

const bar = () => console.log('bar');
const barHani = () => console.log(`This is hani's bar.`);

const baz = () => console.log('baz');

// Adding another method with a whole set of setTimeout(), Promise, and nextTick()
const hani = () =>  {
    setImmediate(() => {
        console.log('setImmediate - hani');
    })
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
    setImmediate(() => {
        console.log('setImmediate');
    })
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

// The two lines above prints this:
/*
foo
baz
hani
Use of nextTick()
Use of nextTick() - hani
should be right after baz, before bar
should be right after baz, before bar - hani
bar
This is hani's bar.
setImmediate
setImmediate - hani
*/