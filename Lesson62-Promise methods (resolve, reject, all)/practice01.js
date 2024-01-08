//Bài toán số 1
//Trong lần quá trình xử lý then thì có reject
//Giữa đường có môt promise bị reject thì xuống catch để xử lý

function sleep(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject("co loi!");
        });
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .catch(function(err) {
        console.log(err);
    });