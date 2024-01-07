// Lắng nghe được những sự kiển sảy ra trong Dom
/**
 * Dom Event
 * Sử dụng trong các trường hợp đơn giản , Không cần gỡ bỏ
 * Event listener
 * xử lý nhiều việc trong một event và muốn hủy bỏ lắng ghe trong môt thời điểm nào đó
 * co nhiêu việc cụ thể nào đó được tách ra riêng biệt
 *  1. Xử lý nhiều việc trong một event
 *  2. Lang nghe / Huy bo lang nghe
 */

var btn = document.getElementById("btn");

// event listener (Event name , function callback khi event xảy ra)
// Cung cấp cú pháp khá rỏ nghĩa
// Có thể add event nhiều lần (Giống nhau vẫn ok )
// Add vào trước thì gọi trước , add vào sau thì gọi sau

btn.addEventListener("click", (e) => {
    console.log(Math.random());
});

btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);
btn.addEventListener("click", viec3);

// Hủy bỏ muốn lắng nghe
setTimeout(() => {
    btn.removeEventListener("click", viec1);
}, 3000);

// Giả sử function xử lý công việc theo thứ tự như bên dưới
function viec1() {
    console.log("Viec 1");
}

function viec2() {
    console.log("Viec 2");
}

function viec3() {
    console.log("Viec 2");
}

// Ứng dụng nhập ô input nhấn F5 thì add sự kiên unload sau khi confirm xong
// Nếu di chuyển qua trang mới thì hủy lắng nghe sự kiện