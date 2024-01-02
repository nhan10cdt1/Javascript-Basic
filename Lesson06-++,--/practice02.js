var a = 6;
var output = a++;

console.log(output); // output = 6;

// step 1 : Copy biến a ra `acopy`, `acopy`= 6 ;
// step 2 : Trừ 1 của a, a = a - 1 -> a  = 5;
// step 3 : Trả về biến `acopy`

console.log(a); // a = 7

var number = 6;

var total = number++ + --number;
console.log(total);
// => total : 6 + 6

var total2 = ++number * 2 - number-- * 2;
console.log(total2);
//=> total2 : 7 * 2 - 7 * 2