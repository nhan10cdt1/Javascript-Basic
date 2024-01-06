// Kiểm tra xem hoạt động bình thường của every
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

Array.prototype.every2 = function (callback) {
  var result = true;
  // Lặp qua phần tử của mảng
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      // Kiểm tra điều kiện
      var condition = callback(index, this[index], this);
      if (!condition) {
        // chỉ cần 1 lần sai thì thì trả về false thoát luôn vòng lặp
        result = false;
        break;
      }
    }
  }
  return result;
};

// Thực thi hàm dựng every2
var result = courses.every2(function (index, course, array) {
  return course.coin > 5;
});

// in ra kết quả của hàm every2 dựng true or false
console.log(result);
