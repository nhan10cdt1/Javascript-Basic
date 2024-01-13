//function

var courseAPI = "http://localhost:3000/courses";

function getCourse(callback) {
    fetch(courseAPI)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    };
    fetch(courseAPI, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function deleteCourse(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    fetch(courseAPI + "/" + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            // getCourse(function(courses) {
            //     renderCourse(courses);
            // });

            var courseItem = document.querySelector(".course-item" + id);
            courseItem.remove();
        });
}

function renderCourse(courses) {
    var listCourseBlock = document.querySelector("#list-courses");
    console.log(listCourseBlock);
    var htmls = courses.map(function(course) {
        return `<li class ="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick ="deleteCourse(${course.id})">Delete</button>
        </li>`;
    });
    listCourseBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function() {
        var id = document.querySelector("input[name='id']").value;
        var name = document.querySelector("input[name='name']").value;
        var description = document.querySelector("input[name='description']").value;

        var formData = {
            id: id,
            name: name,
            description: description,
        };
        createCourse(formData, function() {
            getCourse(function(courses) {
                renderCourse(courses);
            });
        });
    };
}

function start() {
    getCourse(function(courses) {
        renderCourse(courses);
    });

    handleCreateForm();
}

start();