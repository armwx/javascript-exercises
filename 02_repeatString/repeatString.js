const repeatString = function(word, number) {
let print = 1;
let output = "";
if (number < 0) {
    return 'ERROR';
}

// Completed this task using 2 dif loops. 

for(let i =0; i < number; i++){
    output += word;
 }

//while (number >= print) {
//    output += word;
//   print++; };


return output;
};


// Do not edit below this line
module.exports = repeatString;
