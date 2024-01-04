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

//phai co doi so la mot funtion truyen vao trong map(funtion (){})
var numbers = [5, 10, 20, 30, 50];
var newNumber = numbers.map(function(item) {
    return item * 2;
});

var newNumber = numbers.map((item) => {
    return item * 2;
});

// Lặp qua các phần tử của mảng, và cho phép xử lý giá trị của các phần tử đó
//name thề thêm  `Khoa hoc`  va Thêm thuộc tính cointext :`Giá trị`
// Trả về đối tượng sau khi chỉnh sửa

var newcourses = courses.map((course, index, originArray) => {
    return {
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
    };
});
// Muốn đưa ra một mảng chỉ có tên khóa học không thôi
var newcourses = courses.map((course, index) => {
    return course.name;
});

//Truyền anonymous funtion
courses.map((course, index, originArray) => {
    console.log(originArray);
    return {
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
    };
});

/*
Ưu điểm 
1.Dùng vòng lặp thuần túy thì dễ hiểu hơn 
2.Ngắn gọn
3.Hiệu năng 
4.
*/