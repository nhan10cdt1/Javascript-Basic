/*
  1. Promise.resolve
  2. Promise.reject
  3. Promise.all  
  // Bất đồng bộ và muốn chạy song song.
 */

var Promise = new Promise(function(resolve, reject) {
    //Logic
    resolve("Success!"); // thanh cong
    reject("Failed!"); // That bai
});

promise
    .then(function(result) {
        console.log("result: " + result);
    })
    .catch(function(err) {
        console.log("err :", err);
    });

// promise resolve

var promise = Promise.resolve("Success!");
var promise = Promise.reject("Fail!");

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([1]);
    }, 2000);
});
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([2, 3]);
        // reject("Fail !");
    }, 5000);
});

// Nếu 1 trong 2 bị reject thì dừng , nhảy xuống catch.
// Nhận đối số vào là một mảng
// PromiseAll trả về một promise, nên có thể .then
// Khi các thành phần promise hoàn thành thì mới nhảy đến xử lý trong then
// Trả về một mảng kết quả , trả về sau khi chạy từng promise .
// Lấy kết quả và xử lý
Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })
    .catch(function(err) {
        console.error(err);
    });