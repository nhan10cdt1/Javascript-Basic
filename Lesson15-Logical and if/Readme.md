## Hiểu hơn về lệnh điều kiện và phép so sánh

---

```c
var a = 1;
var b = 2;
var rusult = a < b && a < 0;
console.log(rusult);
```

- Toán tử logic (&&) giúp trả về kết quả một trong hai vế

```c
var result1 = "A" && "B" && "C" && "D" && "E" && "F";
console.log(result1); //=> in ra ký tự là F
```

- Luôn đọc từ trái sang phải **False** cái là dừng lại lấy luôn kết quả đó

```c
var result1 = "A" || "B" || "C" || "D" || "E" || "F";
console.log(result1);// => in ra ký tự là A
```

- Luôn đọc từ trái sang phải **True** cái là dừng lại
