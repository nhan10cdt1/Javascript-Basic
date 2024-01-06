//Attribute Node
var headingElement = document.querySelector("h1");

// Sử dụng setter để gán Attribute node
// Điều kiện attribute phải tồn tại trong thẻ đó
headingElement.title = "add-heading";
// add className
headingElement.className = "heading";

console.log(headingElement);

//Cách setter bằng method , Đặt bằng tên gì củng được
headingElement.setAttribute("href", "value");

// getter
console.log(headingElement.getAttribute("class"));
