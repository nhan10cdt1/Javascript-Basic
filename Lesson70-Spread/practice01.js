// Đối với array
var array1 = ["javascript", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];

// Nối hai array1 và array2 thành array3
var array3 = [...array1, ...array2];

// Đối với object
var object1 = {
    name: "javascript",
};

var object2 = {
    price: 1000,
};

//Nối hai object1 và object2 thành object3
var object3 = [...object1, ...object2];

// Ứng dụng

/**
 * rest
 * spread
 */
// Sử dụng để kết hợp hai object
var defaultConfig = {
    api: "http://localhost-trang-khoa-hoc",
    apiVersion: "v1",
    other: "other",
};
var exerciseConfig = {
    ...defaultConfig,
    // cùng key thì lấy cái key ở phía sau.
    api: "http://localhost-trang-bai-tap",
};

// Sử dụng spread với việc truyền tham số cho hàm .
var array = ["Javascript", "PHP", "Ruby"];

// Thường sử dụng rest cho trường hợp này
function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
logger(...array);

// function logger2(a,b,c) {
//     console.log(a, b, c);
// }
// logger2(...array);