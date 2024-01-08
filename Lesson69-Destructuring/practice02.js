// Sử dụng trong việc định nghĩa ra tham số

// 1. Ứng với đối số thông thường
// rest lấy ra những phần còn lại nếu ở phía trước không có đối số
function logger(a, ...params) {
    // Gần giống với arguments
    console.log(params);
}
console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 2. Làm việc với đối số là mảng
function logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger([2, 3, 4, 5]);

// 3. Làm việc với đối số  object
var obj = {
    name: "Javascript",
    price: 1000,
    image: "image-address",
    children: {
        name: "ReactJs",
    },
};

// Trước kia
function logger(obj) {
    console.log(obj.name);
    console.log(obj.price);
}

// Ứng dụng để viết ngắn gọn lại .
function logger({ name, price, ...rest }) {
    console.log(name);
    console.log(price);
    // Lấy ra phần còn lại
    console.log(rest);
}

logger({
    name: "Javascript",
    price: 1000,
    description: "Dscription content",
});