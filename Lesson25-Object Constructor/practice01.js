function User(firstName, lastname, avatar) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.avatar = avatar;
    this.getname = function() {
        return `${this.firstName} ${this.lastname}`;
    };
}

var author = new User("Son", "dang", "Avatar");
var user = new User("vu", "Nguyen", "Avatar");

console.log(author);
console.log(user);

// Đối tượng được tạo ra bằng Object Constructor
console.log(author.constructor === User);

// Thêm thuộc tính cho đối tượng
author.title = "chia se dao tai F8";
user.comment = "lieu co khoa asp.net nao khong add";

// Truy xuất tới phương thức trong object
console.log(author.getname());

//Thêm thuôc tính cho Object constructor thì phải thông qua prototype
User.prototype.className = "F8";
User.prototype.getClassName = function() {
    return this.className;
};

// Truy xuất thuộc tính className mới thêm vào
console.log(user.className);