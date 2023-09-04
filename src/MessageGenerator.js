const prompt = require('prompt-sync')({sigint: true});

//Generates number from 0 to (num - 1)
function randomNum(num) {
    return Math.floor(Math.random() * num);
}

console.log("Let's generate a sentence!")

//Prompts the user to enter values
const nouns = prompt('Enter at least 3 nouns: ');
//Splits values into array
let nounsList = nouns.split(" ");
const adj = prompt('Enter at least 3 adjectives: ');
let adjList = adj.split(" ");
const verbs = prompt('Enter at least 3 verbs: ');
let verbsList = verbs.split(" ");

const generateSentence = (nounsList, adjList, verbsList) => {
    //Gets random noun from list
    let noun = nounsList[randomNum(nounsList.length)];
    let adj = adjList[randomNum(adjList.length)];
    let verb = verbsList[randomNum(verbsList.length)];

    let sentence = `The ${adj} ${noun} wanted to ${verb} in the park.`;
    console.log(sentence);
}

generateSentence(nounsList, adjList, verbsList);