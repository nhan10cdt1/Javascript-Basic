if (true) {
    var courses = "javascritp basic";
    let title = "Khoa hoc javascript basic";
    const PI = 3.14;

    //Chỉ khai báo được 1 lần duy nhất
    // const PI = Math.PI;
    {
        {
            {
                let title = "Ưu tiên let gần nhất.";
                // Bên trong scope nên vẫn truy cập được
                console.log(title);
            }
        }
    }
}
//1. Phạm vi sử dụng

//var thì sử dụng được ngoài scope
console.log(courses);

//error -  Let,const chỉ có thể sử dụng trong scope khai báo .
//console.log(title);
//console.log(PI);

//2. Hosting

// var được hổ trợ hosting , đưa lên đầu có thể sử dụng trước khi khai báo .
// Let , const không được hổ trợ hosting

a = 1;
var a;

//3. assignment

// var, let thì có thể gán lại lần 2 .
// const thì không thể dùng toán tử gán lần thứ 2 với nó.

//OK
var number = 2;
number = 8;

//OK
let string = "this is a string";
string = "replace string ";

// error
// const   a = "JAVA";
// a = "java";
// console.log(a);

//OK
//Gán lại thuộc tính name của object gán có biến a .
const a = {
    name: "javascript",
};

a.name = "PHP";

console.log(a);

// Kiểu dữ liệu tham chiếu và tham trị trong javascript .

//