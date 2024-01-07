//1. Atribute events
//Nhiều thẻ h1

var h1Elements = document.querySelectorAll("h2");

console.log(h1Elements);
// Lấy ra danh sách thẻ h1
for (var i = 0; i < h1Elements.length; i++) {
  h1Elements[i].onclick = function (e) {
    console.log(e.target);
  };
}
