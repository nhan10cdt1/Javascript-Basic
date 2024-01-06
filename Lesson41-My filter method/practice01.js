// Kiểm tra xem hoạt động bình thường của filter
// Kiểm tra xem có return gì về không
// Nó có chạy qua array có phần tử là emperty hay không

var courses = [
  {
    name: "Javascript",
    coin: 255,
  },
  {
    name: "PHP",
    coin: 10,
  },
  {
    name: "Ruby",
    coin: 40,
  },
  {
    name: "Html",
    coin: 30,
  },
];

Array.prototype.filter2 = function (callback) {
  var output = [];
  // Lặp qua phần tử của mảng
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      // Kiểm tra điều kiện
      var condition = callback(index, this[index], this);
      if (condition) {
        // Đúng thì lấy kết quả của index tương ứng
        output.push(this[index]);
      }
    }
  }
  return output;
};

// Thực thi hàm dựng filter2
var result = courses.filter2(function (index, course, array) {
  return course.coin < 50;
});

// in ra kết quả của hàm filter2 dựng
console.log(result);
