// promise Object constructor có từ phiên bản ES6

var promise = new Promise(
    // Đối số tryền vào constructor Truyền vào 1 hàm thường được gọi là Executor
    function(resolve, reject) {
        // 1. Logic : Nghiệp vụ do mình quyết định
        // 2. Thành công : resolve()
        // 3. Thất bại : reject()

        // fake call api
        // Đẩy dữ liệu về
        resolve([{
            id: 1,
            nam: "Javascript",
        }, ]);

        reject("Co loi!");
    }
);

//then,catch,finally nhận callback function làm đối số.
promise
    .then(function(courses) {
        // promise is resolved
        console.log(courses);
    })
    .catch(function(error) {
        // promise is rejected
        console.log(error);
    })
    .finally(function() {
        // Lúc nào củng được gọi.
        console.log("Done!");
    });