var languages = ["Javascript", "PHP", "Ruby"];

// Trả về phần tử đả xóa
var newArrays = languages.splice(0, 2, "Html");

// In ra phần tử đả xóa
console.log(newArrays);

// In ra mảng sau khi thay đổi
console.log(languages);