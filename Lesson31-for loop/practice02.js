/**
 For/of loop 
 1. Trong trường hợp lấy ra phần tử của mảng, hay của chuỗi
 Không áp dụng trực tiếp cho object 
 */

//1. Đối với 1 mảng
var languages = ["javascript", "PHP", "Ruby"];

for (var value of languages) {
    console.log(value);
}

//2. Trường hợp là 1 object
//Chuyển thành 1 mảng  keys hoặc value

// Lấy ra key của một object
var keys = objects.keys(myInfo);
for (const key of keys) {
    console.log(key);
}

// Lấy ra value của object
var values = objects.values(myInfos);
for (const myInfo of myInfos) {
    console.log(myInfo);
}

//3. Trường hợp với 1 chuỗi
for (var value of myString) {
    console.log(value);
}