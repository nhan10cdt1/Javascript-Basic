## Destructuring trong javascript ES6.

- Destructuring là toán tử Phân rã
- Sử dụng với Object và Array

### rest

1. rest khi kết hợp với destructuring .

```c
var [a, ...rest] = array;
console.log(a);
console.log(rest);
```

2.  Sử dụng trong việc định nghĩa ra **tham số** .

- Đối với tham số bình thường

```c
function logger(...params) {
console.log(params);
}
console.log(logger(1,2,3,4,5,6,7,8,9,10));
```

- Đối với tham số là một mảng

```c
function logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger([2, 3, 4, 5]);
```

- Đối với tham số là một object

```c
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
```
