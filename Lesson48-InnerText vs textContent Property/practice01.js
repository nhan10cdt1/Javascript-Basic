//innerText , textcontent

headingElement = document.querySelector(".heading");

// getter
// Nội dung lấy được nội dung giống như ở trên trình duyêt
console.log(headingElement.innerText);

// nội dung thật nằm trong DOM
console.log(headingElement.textContent);

// setter
//sữa đổi nội dung

headingElement.innerText = "New heading";

headingElement.textContent = "New heading";
