var ulElement = document.querySelector("ul");

// Ngăn chặn hành vi mặc định của trình duyệt với sự kiện onmousedown
ulElement.onmousedown = function(e) {
    e.preventDefault();
};

ulElement.onclick = function(e) {
    console.log(e.target);
};