// for each, find, filter, some, every, ruduce
var courses = ["Javascript", "PHP"];

courses.length(10);

console.log(courses);

// Phần tử emperty nhưng vẫn được duyệt qua
// Chỉ có hai phần tử thực - còn lại là emperty
for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

// Sử dụng vòng lặp for in - chỉ lặp qua những phần tử thực thôi.
for (const key in courses) {
  console.log(key, courses[key]);
}

// Khởi tạo mảng có length là 10
var array = new Array(10);
console.log(array);

// Khởi tạo mảng có hai giá trị 10, 20.
var myArray = new Array(10, 20);
console.log(myArray);
