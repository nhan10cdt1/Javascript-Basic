// 1. Đối với mảng
//Bài toán tạo ra lần lượt 3 biến a, b, c chưa lần lượt các giá trị
var array = ["Javascript", "PHP", "Ryby"];

// Vỏ hộp [] chứa 3 element ở bên trong .

// Lấy ra giá trị của mảng lưu vào 3 biến a, b, c.
var [a, b, c] = array;

// Lấy ra giá trị của a và c .
var [a, , c] = array;

// Lấy ra giá trị của a .
var [a] = array;

// Lấy tất cả trừ a , toán tử rest .

//rest
// 1. rest khi kết hợp với destructuring .
// 2. Sử dụng trong việc định nghĩa ra tham số .
var [a, ...rest] = array;
console.log(a);
console.log(rest);