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

//Sử dụng tìm kiếm
//Nếu có nhiều phần tử thỏa mãn thì chỉ trả về phần tử đầu tiên.
var course = courses.find(function(course, index) {
    return course.name === "Nhan"; //Điều kiện kiểm tra.
});

//Xét cho toàn bộ phần tử của mảng
console.log(course);