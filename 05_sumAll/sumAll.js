const sumAll = function(start,finish) {
sum = 0; 
if (!Number.isInteger(start) || !Number.isInteger(finish) || start <= 0 || finish <= 0) {
    return 'ERROR';
}
// const sumList = []; 

// declaring new values to satisfy tests where the greater value is first (start), and smaller second (finish) in parameter
let a = start;
let b = finish;

if (start > finish) {
    a = finish;
    b = start;
}

for (let i = a; i <= b; i++){
    //sumList.push(i);
    sum += i;
}
//console.log(`the sum list is: ${sumList}`)
return sum;
};

// console.log(sumAll(5.5,1));

// Do not edit below this line
module.exports = sumAll;
