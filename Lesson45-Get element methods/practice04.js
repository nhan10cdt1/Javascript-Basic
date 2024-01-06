//4.get by css selector

//Có nhiều phần tử cùng clas thì chỉ select element đầu tiên .
var elememt = document.querySelector(".heading");
console.log(elememt);
//Lấy hết tất cả các element có class
var elements = document.querySelectorAll(".item");
console.log(elements);
