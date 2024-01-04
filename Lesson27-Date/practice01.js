// Đối tượng Date
var date = new Date();

// Kiểu Object
console.log(typeof date);

// Kiểu string
console.log(date);

var year = date.getFullYear();

var month = date.getMonth() + 1;

var day = date.getDate();

console.log(`${day}/${month}/${year}`);

//Cách ngắn gọn để lấy thời gian
var date = Date();
console.log(date);