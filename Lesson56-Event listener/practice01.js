var btn = document.getElementById("btn");

// Lắng nghe sự kiện
btn.onclick = function() {
    //Việc 1
    console.log("Viec 1 ");

    //Việc 2
    console.log("Viec 2");

    //Việc 3
    alert("Viec 3");
};

// Hủy bỏ lắng nghe của DOM event
setTimeout(() => {
    btn.onclick = function() {
        // Sau 3s thì bị function trống ghi đè , Hủy bỏ lắng nghe .
    };
}, 3000);