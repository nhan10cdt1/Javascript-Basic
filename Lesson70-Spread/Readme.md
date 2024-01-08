## Destructuring trong javascript ES6.

- Destructuring là toán tử Phân rả
- Sử dụng với Object và Array

### spread

- spread là toán rãi.
- Những trường hợp còn lại thì là spread.

1. Khi gọi đến hàm và truyền **đối số** thì là spread.

```c
// Sử dụng spread với việc truyền tham số cho hàm .
var array = ["Javascript", "PHP", "Ruby"];
 function logger2(a,b,c) {
     console.log(a, b, c);
 }
 logger2(...array);
```

2. Đối với array và object.

- Khi rãi ... trước một array hoặc một object thì dấu [],{} được lược bỏ .

- Đối với array

```c
var array1 = ["javascript", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];

// Nối hai array1 và array2 thành array3
var array3 = [...array1, ...array2];
```

- Đối với object

```c
var object1 = {
    name: "javascript",
};

var object2 = {
    price: 1000,
};

//Nối hai object1 và object2 thành object3
var object3 = [...object1, ...object2];
```
