//Bài toán số 3
//Bài toán 1s in ra 1 số

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
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    });