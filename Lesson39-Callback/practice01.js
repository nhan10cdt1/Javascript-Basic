// Là một hàm
function myCallback(value) {
    console.log("run :", value);
}
// Được truyền thông qua đối số
// Được gọi lại trong hàm
function myFuntion(param) {
    if (typeof param === "function") {
        param("hoc lap trinh ");
    }
}

// run
myFuntion(myCallback);