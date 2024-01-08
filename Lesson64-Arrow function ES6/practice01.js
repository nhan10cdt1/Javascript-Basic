//  expression function
const logger = function myFuncton(log) {
    console.log(log);
};

// Từ expression function bỏ từ khóa function và thêm dấu  =>
const logger2 = (log) => {
    console.log(log);
};

logger("Message..");

const total = (a, b) => {
    a + b;
};

// Viết trực tiếp không viết trong {} thì hiểu là return luôn.
const total2 = (a, b) => a + b;

//Gom nhóm object trong ();
const sum = (a, b) => ({ a: a, b: b });

// Hàm duy nhất 1 tham số thì có thể bỏ ()
const logger3 = (log) => console.log(log);

// arrow function thì không có context value this.
const course = {
    name: "Javascript",
    getName: () => {
        return this; // context value : undifined
    },
};

// arrow function thì không thể sử dụng nó tạo object constructor.
const Course = function(name, prices) {
    this.name = name;
    this.prices = prices;
};

//Khong con console ra duoc bao loi
const Course2 = (name, prices) => {
    this.name = name;
    this.prices = prices;
};
const jsCourse = new Course("Javascript", 100);

console.log(jsCourse);