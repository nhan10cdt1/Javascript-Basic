/*
Bài toán 
- Khi click vào button thì in ra chử click me 
- Khi click vào chử DIV thì in ra chử DIV 
*/

document.querySelector("div").onclick = function(e) {
    console.log("DIV");
};

document.querySelector("button").onclick = function(e) {
    e.stopPropagation();
    console.log("Click me");
};