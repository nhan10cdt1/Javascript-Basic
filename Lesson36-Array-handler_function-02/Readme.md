## Phương thức làm việc với array

1. forEach

- Duyệt qua lần lượt các phần tử của mảng

2. every

- Kiểm tra tất cả phần tử của mảng thỏa mản 1 điều kiện nào đó
- Giá trị trả về là true hoặc false  
  vd: Check xem tất cả các khóa học có miển phí hay không

3. some

- Kiểm tra 1 phần tử tronng mảng thỏa mãn điêu kiện, chỉ cần đúng thì dừng ngay tại vị trí đó
- Giá trị trả về là true hoặc false.

4. find

- Tìm kiếm phần tử thỏa mãn điều kiện
  vd : Tìm kiếm khóa học tên là "Ruby"

- Giá trị trả về chính là phần tử thỏa mãn điều kiện,
  trả về phần tử duy nhất đầu tiên nếu có , nếu không có thì trả về undefined
- Ứng dụng cho chức năng tìm kiếm

5. fillter

- Giống như find nhưng sẽ trả về tất cả phần tử thỏa mản điều kiện
  vd :
  - Tìm số điện thoại trong danh bạ

6. map

- Thay đổi element của một mảng
- Giá trị trả về là 1 mảng mới

  vd:

  - Thay đổi value của một key
  - add thêm key và value của một object
  - Tách mảng mới trong 1 mảng củ
  - Ứng dụng render view ra giao diện

6. reduce

- Khi muốn nhận về một giá trị duy nhất

```c
var courses = [{
        id: 1,
        name: "Nhan",
        coin: 250,
    },
    {
        id: 2,
        name: "aaa",
        coin: 0,
    },
    {
        id: 3,
        name: "bbb",
        coin: 0,
    },
    {
        id: 4,
        name: "ccc",
        coin: 250,
    },
    {
        id: 5,
        name: "ddd",
        coin: 250,
    },
];
/*
accumulator  : Biến tích trữ khởi tạo có bằng giá trị initvalue trong lần chạy đầu tiên
currentValue : Giá trị hiện tại
cerrentIndex : inddex tương ứng với giá trị hiện tại
originArray  : Mảng giống nhưng mang được đưa vào
*/
function coinHandler(accumulator, currentValue, cerrentIndex, originArray) {
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0); //initial value
```
