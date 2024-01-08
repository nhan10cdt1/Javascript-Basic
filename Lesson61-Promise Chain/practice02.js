var promise = new Promise(function(resolve, reject) {
    //logic

    //Thành công
    resolve();

    // Thất bại
    // reject();
});

// Bài học số 2
// Nếu khônng return 1 prosmise thì chạy ngay cái đằng sau.
// Nếu return ra 1 promise thì phải thực hiện promise run xong mới chạy then tiếp theo
promise
    .then(function() {
        // promise is resolved
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve([1, 2, 3]);
            }, 1000);
        });
    })
    .then(function(data) {
        // promise is resolved
        console.log(data);
        return 2;
    })
    .then(function(data) {
        // promise is resolved
        console.log(data);
    });