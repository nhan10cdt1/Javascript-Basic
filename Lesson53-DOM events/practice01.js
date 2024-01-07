//1. Atribute events
// bằng attribute tương ứng để gắn sự kiện

//2. Asign event using the element node
// get element , sau đó gán sự kiện .

// get element
var h1Elements = document.querySelector(".box h1");

// click hover
h1Elements.onclick = function (e) {
  console.log(e.target);
  console.log(this);
};

// hover event
h1Elements.onmouseover = function (e) {
  console.log(this.textContent);
  // console.log(e.target);
};

// Khi click vào thẻ con của thẻ đang gắn sự kiện
// Thì sự kiện vẫn xảy ra, sự kiện nổi bọt
