var users = [
  {
    id: 1,
    name: "Nguyen Van A",
  },
  {
    id: 2,
    name: "Nguyen Van B",
  },
  {
    id: 3,
    name: "Nguyen Van C",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Hello world",
  },
  {
    id: 2,
    user_id: 2,
    content: "The first time",
  },
  {
    id: 3,
    user_id: 1,
    content: "thanks you ",
  },
];
//  Kiến thức cần nắm
// 1. Array
// 2. Function ,callback
// 3. Promise
// 4. DOM

//1. Lấy comment
//2. Từ commemt lấy ra user_id
//3. Từ user_id lấy ra username

// callback hell
// Promise hell
// Async / Await

function getUsersByUserId(userIds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id);
      });
      resolve(result);
      console.log("result :", result);
    }, 1000);
  });
}

// Fake API
function getComment() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

getComment()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    // get user by id
    console.log(userIds);
    return getUsersByUserId(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    // Lấy element comment
    console.log("data", data);
    var commentblock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });

      console.log("user", user);

      html += `<li>${user.name} : ${comment.content}</li>`;
    });

    commentblock.innerHTML = html;
  });
