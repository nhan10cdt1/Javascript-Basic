var a = 1;

/**
 * Lưa tạm trong ram lưa trong một vùng nhớ thì ta không thể sữa giá trị
 * khi gán giá trị 2 thì sẻ được tạo ra một vùng nhớ mới
 * đó là kiểu dữ liệu nguyên thủy
 */
// ★ Primitive Data　★

//Number type
var a = 1;
var b = 2;
var c = 3;

//String type
var fullName = "Song'Dang";

console.log(fullName);

//Boolean type
var isSuccess = false;

//Undefined type string
var age;
console.log(age);

//Null
var inNull = null;

//Symbol
var id = Symbol("id"); // unique
var id2 = Symbol("id"); // unique

console.log(id === id2);

// ★　Complex Data　★

// Function

var myFunction = function() {
    alert("Xin chao cac ban");
};

// Object - type

// Object
var myObjectType = {
    name: "SonDang",
    age: 18,
    address: "HaNoi",
    myFunction: function() {},
};

console.log("myObjectType", myObjectType);

var myArray = ["Javascript", "PHP", "Ruby"];

// Data type check
console.log(typeof myArray);