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

//Duyệt qua từng phần tử của mảng
courses.forEach(function(course, index) {
    console.log(index, course);
});