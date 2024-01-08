// Number
var numberJson = "1";

//String
var stringJson = '"abc"';

//boolean

var booleanJson = "true";

//null
var nullJson = "null";

//Array
var arrayJson = '["Javascript","PHP"]';

// object
var objectJson = '{"name":"Son Dang","age":18}';

/*
- Mã hóa (encode)
  - stringify :
    - Từ Javascript types -> JSON
- Giải mã (decode)
  - parse
    - Từ JSON -> Javascript types
 */

// Chuyển từ Json -> Javascript
var json = "1"; //numberJson, stringJson,booleanJson,nullJson,  arrayJson, objectJson
console.log(JSON.parse(json));
console.log(typeof JSON.parse(json));

console.log("---------------------------");

// Chyển từ javascript -> Json
console.log(JSON.stringify(1));
console.log(JSON.stringify("Đây là 1 chuỗi"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify(["Javascript", "PHP"]));
console.log(
    JSON.stringify({
        name: "Son Dang",
        age: 18,
    })
);