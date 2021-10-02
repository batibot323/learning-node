#!/usr/bin/env node

const bar = () => console.log('bar');

const baz = () => console.log('baz');

const hani = () => console.log('hani');

const foo = () => {
    // Moving setTimeout and Promise at the start would still put them after the function.
    setTimeout(bar, 0);
    new Promise((resolve, reject) => {
        resolve('should be right after baz, before bar')
    }).then(resolve => console.log(resolve));
    console.log('foo');
    baz();
}

foo();
hani(); // This executes even before the Promise of foo().