var promise = new Promise(function(resolve, reject) {
    //logic
    //Thành công
    resolve();

    // Thất bại
    // reject();
});

// Bài học số 1
// then 1 return thì đối số của then 2
// Không return ra gì cả thì trả vê là undefine

promise
    .then(function() {
        // promise is resolved
        console.log("1");
        return 1;
    })
    .then(function(data) {
        // promise is resolved
        console.log(data);
        return 2;
    })
    .then(function(data) {
        // promise is resolved
        console.log(data);
    })
    .finally(function() {
        console.log("done!");
    });