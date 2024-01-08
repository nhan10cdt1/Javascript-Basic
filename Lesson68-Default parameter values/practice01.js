// ES5
// Không truyền đối số thì lấy giá trị mặc định.
function logger(log) {
    if (typeof log === "underfined") {
        log = "Giá trị mặc định";
    }
    console.log(log);
}
// ES6
// Tham số không bắt buộc phải nhập.
// type - trong
function logger(log = "Giá trị mặc định", isAlert = false, type = "log") {
    if (isAlert) return alert(log);
    console[type].log(log);
}