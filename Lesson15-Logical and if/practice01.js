/**
 * Understand more about conditional statements and comparisons
 *
 */

var a = 1;
var b = 2;

if (a < b) {
    console.log("A < B");
} else {
    console.log("A >= B");
}

// Operator logic helps return the result of one of two sides
var rusult = a < b && a < 0;
console.log(rusult);

var result1 = "A" && "B" && "C" && "D" && "E" && "F";
//Always read from left to right and stop if condition is true
console.log(result1); //=> prints the letter F

var a = 1;
var b = 2;
var result = "A" && "B" && NaN && "D";

//result =NaN;
if (result) {
    console.log("Điều kiện là true");
} else {
    console.log("Điều kiện là false");
}

var result1 = "A" || "B" || "C" || "D" || "E" || "F";

//Always read from left to right when conditon is true -> stop
console.log(result1);