//Làm việc với chuỗi

var myString = " Hoc JS JS tai F8";

/**
 * REPLACE
 * 1. Chỉ thay thế cái đầu tiên tìm thấy trong chuỗi
 * 2. Muốn thay đổi toàn bộ thì phải dùng biểu thức chính quy
 *
 */

console.log(myString.replace("JS", "JavaScript"));

console.log(/JS/g, "JavaScript");