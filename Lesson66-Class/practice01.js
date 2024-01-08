/**
 * Là cách hiểu khác của constructor function.
 * Constructor function
 */

// function Course(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function() {
//         return this.name;
//     };
// }

//false 0 ,underfine, '', NAN,null

class Course {
    // constructor
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    run() {
        const isSucceeded = false;
    }
}