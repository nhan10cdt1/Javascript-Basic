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

// Giống find nhưng sẻ trả về tất cả các phần tử thỏa mãn điều kiện
var listCourses = courses.filter(function(course, index) {
    return course.name === "Nhan"; //Điều kiện kiểm tra
});
//Xét cho toàn bộ phần tử của mảng
console.log(listCourses);