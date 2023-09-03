const prompt = require('prompt-sync')({sigint: true});

function randomNum(num) {
    return Math.floor(Math.random() * num);
}

console.log(randomNum(10));


const name = prompt('What is your name? ');

console.log("Hey there " + name);
