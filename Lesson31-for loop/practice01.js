//for/in loop

//1. Đối với 1 object
var myInfo = {
    name: "Son Dang",
    age: 18,
    address: "Ha Noi",
    mykey: "083434",
};

for (var key in myinfo) {
    console.log(myinfo[key]);
}

//2. Đối với 1 mảng
var languages = ["javascript", "PHP", "Ruby"];

for (var key in languages) {
    console.log(languages[key]);
}

//3. Đôi với 1 chuỗi
var myString = "Javascript";

for (var key in myString) {
    console.log(myString[key]);
}