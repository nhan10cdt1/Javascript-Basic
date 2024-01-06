//1. Math.PI
console.log("Math PI");
console.log(Math.PI);

//2. Math.round - Làm tròn trên
console.log("Math round");
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5
// Math.round - Làm tròn dưới
console.log(Math.round(4.4)); // 4

//3. Math.abs
console.log("Math abs");
console.log(Math.abs(-10)); // 10

//4. Math.ceil
console.log("Math ceils");
console.log(Math.ceil(4.5)); // 5
console.log(Math.ceil(4.6)); // 5

//5. Math.floor
console.log("Math floor");
console.log(Math.floor(4.5)); // 4
console.log(Math.floor(4.8)); // 4

//6. Math.random
console.log("Math random");
var random = Math.floor(Math.random() * 10);
var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];
console.log(bonus[random]);

//7. Math.min
console.log("Math min");
console.log(Math.min(1, 3, 4)); // 1

//8. Math.max
console.log("Math max");
console.log(Math.max(1, 2, 3)); //3