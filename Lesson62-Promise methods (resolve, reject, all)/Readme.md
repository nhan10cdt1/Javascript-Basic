## Hiểu thêm về promise

1. Promise.resolve
   - Tạo resole
2. Promise.reject
   - Tạo reject
3. Promise.all
   - Giúp các promise chạy song song
   - Nếu 1 trong 2 bị reject thì dừng , nhảy xuống catch.
   - Nhận đối số vào là một mảng
   - PromiseAll trả về một promise, nên có thể .then
   - Khi các thành phần promise hoàn thành thì mới nhảy đến xử lý trong then
   - Trả về một mảng kết quả , trả về sau khi chạy từng promise .
   - Lấy kết quả và xử lý
