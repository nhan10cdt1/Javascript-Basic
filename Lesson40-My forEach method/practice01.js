// Kiểm tra xem hoạt động bình thường của for each
// Kiểm tra xem có return gì về không
// Nó có chạy qua array có phần tử là emperty hay không

var courses = ["Javascript", "PHP", "Ruby", "Java"];

Array.prototype.forEach2 = function (callback) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      callback(key, this[key], this);
    }
  }
};

courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});
