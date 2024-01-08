/**
  1. Đinh nghĩa key và value cho object bằng 1 cách ngắn gọn hơn 
  2. Định nghĩa method cho object 
  3. Định nghĩa key cho object dưới dạng biến 
 */

var name = "Javascript";
var price = 1000;

// Định nghĩa key và value cho object ngắn gọn.
var course1 = {
    name: name,
    price: price,
};

console.log(course1);

// định nghĩa method cho object constructor
var course2 = {
    name,
    price,
    getName() {
        return this.name;
    },
};

console.log(course2.getName());
// Định nghĩa key cho object dưới dạng biến
var fielName = "name";
var fielPrice = "price";
const course3 = {
    [fielName]: "Javascript",
    [fielPrice]: 1888,
};

console.log(course3);