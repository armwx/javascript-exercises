const reverseString = function(word) {


    const convert2Array = function(word) {
        return word.split(''); }

    const reverseArray = function(array){
        return array.reverse(); }

    const joinArray = function (array) {
        return array.join(''); }

    const wordArray = convert2Array(word);

    const reversedArray = reverseArray(wordArray);

    const reversedString = joinArray(reversedArray)

    return reversedString;

    // return word.split('').reverse('').join('');

};

// console.log(reverseString('hello world'));


// Do not edit below this line
module.exports = reverseString;
