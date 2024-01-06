// Khởi tạo mảng
var courses = ["javascript", "PHP", "Ruby"];

// map
var htmls = courses.map(function (course) {
  return `<h2>${course}</h2>`;
});

//Chuyển qua string để render ra trang web
console.log(htmls.join(""));
