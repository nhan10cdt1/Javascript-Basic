## Làm việc với Array

keyword : javascript array methods

1.  To String

    - Chuyển dữ liểu kiểu **array** thành kiểu **string**
    - splice biến một **string** thành một **array**

2.  Join

    - Biến một mảng thành một chuỗi truyền ký tự ngăn cách vào
    - Mặc định thì không có đối số truyền vào ,Nếu muốn phân cách bằng , thì join(' ,')

3.  pop

    - Xóa đi phần tử cuối mảng
    - Trả về chính phần tử đó

4.  push

    - Thêm một hay nhiều phần tử vào cuối mảng
    - Trả về số phần tử mới của mảng

5.  shift

    - Xóa đi phần tử đầu mảng
    - Trả về phần tử đả xóa

6.  unshift

    - Thêm 1 hoặc nhiều phần tử vào đầu mảng
    - Trả về số phân tử mới của mảng

7.  splicing

    - splice(i, j, h);
    - i : Vị trí bắt đầu con trỏ
    - j : Số phần tử xóa
    - h : Số phần tử chèn

8.  concat

    - Nối các Array lại với nhau
    - languagues. concat(langues2)  
      ※Mảng đầu là mảng góc

9.  slicing

    - Cắt phần của mảng
      array. slice('vị trí của con trỏ','số lượng phần tử muốn cắt')

    - Nếu muốn cắt từ vị trị con trỏ đến hết thì không cần thêm đối số thứ 2

    > ứng dụng dùng để copy mảng array. slice(0)

    - Củng có thể truyền vào đối số âm lấy ngược lại
