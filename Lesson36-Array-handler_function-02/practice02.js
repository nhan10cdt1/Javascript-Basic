var courses = [{
        id: 1,
        name: "Nhan",
        coin: 250,
    },
    {
        id: 2,
        name: "aaa",
        coin: 0,
    },
    {
        id: 3,
        name: "bbb",
        coin: 0,
    },
    {
        id: 4,
        name: "ccc",
        coin: 250,
    },
    {
        id: 5,
        name: "ddd",
        coin: 250,
    },
];

//Kiểm tra tất cả phần tử phải thỏa mản điều kiện gì đó
//Check giống toán tử AND
var isFree = courses.every(function(course, index) {
    console.log(index);
    return course.coin === 0; // Điều kiện cần kiểm tra
});
//Xét cho toàn bộ phần tử của mảng .
console.log(isFree);