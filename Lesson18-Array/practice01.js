//Cách tạo mảng
var languages = ["Javascript", "PHP", null, undefined, function() {}, {}];

console.log(languages);

//Độ dài mảng
console.log(languages.length);

//Kiểm tra dữ liệu của mảng
console.log(typeof languages);

//Tìm vị trí đầu tiên trong mảng
console.log(languages.indexOf("element"));

//Cách 2 sử dụng từ khóa new
var arrays = new Array("Javascript", "PHP", null, undefined, function() {});

console.log(arrays);

//Kiểm tra đối tượng có phải là Array hay không
console.log(Array.isArray(languages));

//Truy xuất mảng bằng chỉ số index
console.log(languages[0]);