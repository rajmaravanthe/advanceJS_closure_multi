function outerFun(outerNumber) {
    return function innerFun(innerNumber) {
        return outerNumber * innerNumber; // taking outer function value and doing multi and returning the value
    }
}

var outer = new outerFun(10);
var inner = outer(12);
console.log("Multiplied Value is : "+ inner);