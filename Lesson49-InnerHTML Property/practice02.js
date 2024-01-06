//outerHTML

// get element
var boxElement = document.querySelector(".box");

//getter
// Lấy tính từ element
console.log(boxElement.outerHTML);

//setter
//ghi đè chính element
// Nôi dung củ chỉ lưu trong bộ nhớ , Dom thì không còn nữa tại bị ghi đè.
boxElement.outerHTML = "<span>Test</span>";
console.log(boxElement.outerHTML);
