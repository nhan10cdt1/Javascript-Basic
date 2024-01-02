//Cách 1
var fullName = "NhanNguyen";

//Cách 2
var fullName = new String("NhanNguyen");

//Một số trường hợp sữ dụng về backslash

var fullName = "Nhan nguyen la ' Sieu Nhan'";

var fullName = "this is backslash \\";

//3.Xem độ dài chuỗi
console.log(fullName.length);

//4.Chú ý độ dài khi viết code  => co the xuong dong sau dau =
var fullName = "Tối đa 80 ký tự trên một hàng thôi ";

//5.Template String

var firstName = "Son";
var lastName = "Dang";

console.log(`To la : ${firstName} ${lastName}`);