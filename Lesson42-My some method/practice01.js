// Kiểm tra xem hoạt động bình thường của some
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

courses.length = 1000;

Array.prototype.some2 = function (callback) {
  var result = false;
  // Lặp qua phần tử của mảng
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      // Kiểm tra điều kiện
      var condition = callback(index, this[index], this);
      if (condition) {
        // Đúng thì thì trả về true thoát luôn vòng lặp
        result = true;
        break;
      }
    }
  }
  return result;
};

// Thực thi hàm dựng some2
var result = courses.some2(function (index, course, array) {
  return course.coin > 500;
});

// in ra kết quả của hàm some2 dựng true or false
console.log(result);
