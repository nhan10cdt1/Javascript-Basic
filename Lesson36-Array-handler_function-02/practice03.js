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

// Kiểm tra tất cả các phần tử chỉ cần 1 phần tử thảo mản điều kiện nào đó
// Giống như toán tử  OR
var isFree = courses.some(function(course, index) {
    console.log(index);
    return course.coin === 0; //Điều kiện kiểm tra.
});

//Xét cho toàn bộ phần tử của mảng.
console.log(isFree);