//Thuoc tinh style cua element node

// Thuộc tính style của element node.
// Lấy ra được value của css inline hoắc set css inline cho một element
var boxElement = document.querySelector(".box");

console.log(boxElement.style);

// settter
// boxElement.style.width = "100px";
// boxElement.style.height = "100px";
// boxElement.style.backgroundColor = "red";

// Cách thêm nhiều thuôc tính băng Object assign
// Thêm vào css inline .
Object.assign(boxElement.style, {
  width: "100px",
  height: "100px",
  backgroundColor: "red",
});

//getter
console.log(boxElement.style.width);
