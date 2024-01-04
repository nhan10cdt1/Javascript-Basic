// Khai báo môt  object lưu thông tin

var emailKey = "email";
var myInfo = {
    name: "Nguyen Van",
    "full-Name": "Nguyen Van Nhan", // full-name là cách đặt tên không hợp lê > phải biến thành 1 chuỗi 'full-name'
    age: 18,
    address: "Ha Noi",
    mykey: "083434",
    [emailKey]: "nhanbkdn1211@gmail.com",

    getname: function() {
        return this.name;
    },
};

console.log(myInfo);

//1. Thêm một cặp key và value vào trong một object đã được tạo
// Trường hợp không vi phạm nguyên tắc đặt tên của key
myInfo.email = "nhanbkdn1211@gmail.com";

//Trường hợp vi phạm quy tắc đặt tên thì phải chuyển key thành chuỗi
myInfo["my-email"] = "nhanbkdn1211@gmail.com";

//2. Muốn lấy value của một Object thì cần phải xác định được key
// Cách 1
console.log(myInfo.name);

// Cách 2
console.log(myInfo["address"]);

//3. Key của object được khởi tạo thông qua biến
var myKey = "address";
var emailKey = "email";

//Truy xuất đến key address được định nghĩa trong biến mykey
console.log(myInfo[myKey]);

//Truy xuất đến key mykey
console.log(myInfo["mykey"]);

//4. Xóa đi một cặp  key - value trong một object
delete myInfo.name;

//5. Lưu trử một value là 1 function
console.log(myInfo.getname());

// function Phương thức - method
// Other Thuộc tính - property