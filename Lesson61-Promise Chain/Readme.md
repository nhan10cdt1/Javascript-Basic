## Promise Chain

1. Các hàm được chạy tuần tự

- Kết quả trả về của **then đầu** có thể làm tham số cho **then sau**
- Không return gì thì cái giá trị sau sẻ là **underfine**

2. Then (return)

- Nếu không ruturn ra một promise thi chạy ngay cái đằng sau.
- Nếu return ra một promise thì phải chờ chạy xong mới đến then tiếp theo.

3. ví dụ
