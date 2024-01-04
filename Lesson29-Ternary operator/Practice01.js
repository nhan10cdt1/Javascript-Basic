//Toán tử 3 ngôi trong javascript

var courses = {
    name: "Javascript",
    coin: 250,
};

if (courses.coin > 0) {
    console.log(`${courses.coin} Coins`);
} else {
    console.log("Mien phi");
}

// Sử dụng toán tử 3 ngôi
var result = courses.coin > 0 ? `${courses.coin} Coins` : "Mien phi";

console.log(result);

var a = 1;
var b = 3;
var c = a > 0 ? a : b;