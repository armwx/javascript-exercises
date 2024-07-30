const fibonacci = function(n) {
    const fibonacci = [1,1];
    if (n < 0){
        return "OOPS"
    } else if (n == 0) {
        return 0;
    }
    for (i=2; i <= n; i++) {
        const next = fibonacci[i-1] + fibonacci[i-2];
        fibonacci.push(next);
    }
    return parseInt(fibonacci[n-1])
    // `answer: ${parseInt(fibonacci[n-1])}
    // array: ${fibonacci}`
};

console.log(fibonacci(0));
// Do not edit below this line
module.exports = fibonacci;
