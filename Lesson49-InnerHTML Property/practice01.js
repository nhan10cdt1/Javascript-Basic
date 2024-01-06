// Thêm môt element node, attribute node , text node vào trong 1 element .
// Ứng dụng thêm html vào trong một element node

// get element
var boxElement = document.querySelector(".box");

// Thêm nội dung vào trong một element, củng vừa thêm một textnode chính là Heading.
boxElement.innerHTML = "<h1>Heading</h1>";

console.log(boxElement.textContent);

console.log(boxElement.innerHTML);
