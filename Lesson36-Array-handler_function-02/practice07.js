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

//
//Tính tổng số coin của các phần tử trong mảng

//1. Khởi tạo biên lưu trử
var totalCoin = 0;

//2. Thực hiện việc lưu trử

for (var course of courses) {
    totalCoin += course.coin;
}

console.log(totalCoin);

var i = 0;
/*
accumulator : Biến tích trữ khởi tạo có bằng giá trị initvalue trong lần chạy đầu tiên 
currentValue : Giá trị hiện tại 
cerrentIndex : inddex tương ứng với giá trị hiện tại
originArray : Mảng giống nhưng mang được đưa vào 
*/
function coinHandler(accumulator, currentValue, cerrentIndex, originArray) {
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0); //initial value

const numbers = [10, 15, 20];

var result = numbers.reduce((total, currentValue, currentIndex, origiArray) => {
    return total + currentValue.coin;
}, 5);

// Bài tập thực hành reduce

// Làm phẳng mảng
var depthAraay = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthAraay.reduce(function(flatOutPut, depthItem) {
    return flatOutPut.concat(depthItem);
}, []);

// Lấy ra toàn bộ khóa học và đưa vào môt mảng mới
var topics = [{
        topic: "Front-end",
        courses: [{
                id: 1,
                title: "Html,css",
            },
            {
                id: 2,
                title: "Javascript",
            },
        ],
    },
    {
        topic: "Back-end",
        courses: [{
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeRS",
            },
        ],
    },
];

var newCourse = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);

console.log(newCourse);

// Ứng dụng render view html
var html = newcourse.map(function(course) {
    return `<div>${course.title}</div>`;
});