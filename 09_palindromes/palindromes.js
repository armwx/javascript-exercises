const palindromes = function (input) {
const word = input.toLowerCase().replace(/[.,!?\s]/g, '');
const wordArray = word.split('');
const wordArrayReverse = wordArray.slice().reverse();

const result = wordArray.every((value,index) => value === wordArrayReverse[index]);

return result;

// return `
// Result: ${result}
// ${typeof(word)}
// Word: ${word}

// ${typeof(wordArray)}
// Array: ${wordArray} 

// ${typeof(wordArrayReverse)}
// Reverse: ${wordArrayReverse}`

};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
