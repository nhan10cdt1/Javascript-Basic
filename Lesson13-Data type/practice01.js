var a = 1;

/**
 * KIỂU DỮ LIỆU NGUYÊN THỦY
 * Giá trị được gán Lưa tạm trong RAM
 * Giá trị lưu trong một vùng nhớ này thì ta không thể chỉnh sửa
 * khi gán giá trị  khác 2 thì sẻ được tạo ra một vùng nhớ mới
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
//=> FALSE

// ★　Complex Data　★

// Function

var myFunction = function() {
    alert("Xin chao cac ban");
};

// Object - type

// Object
var myObjectType = {
    name: "Nhan Nguyen",
    age: 18,
    address: "HaNoi",
    myFunction: function() {},
};

console.log("myObjectType", myObjectType);

var myArray = ["Javascript", "PHP", "Ruby"];

// Data type check
console.log(typeof myArray);