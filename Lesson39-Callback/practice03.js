// Khởi tạo mảng
var courses = ["javascript", "PHP", "Ruby"];

// Chiều dài của mảng

Array.prototype.map2 = function (callback) {
  var arrayLength = this.length;
  var output = [];

  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};

// map2 sau khi được dựng
var htmls = courses.map2(function (course, index) {
  return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));
