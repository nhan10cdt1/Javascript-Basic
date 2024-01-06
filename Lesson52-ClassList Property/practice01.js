var boxElement = document.querySelector(".box");
//add
boxElement.classList.add("class-1", "class-2");

//contains
console.log(boxElement.classList.contains("class-1"));
//remove
boxElement.classList.remove("class-1");

//toggle
boxElement.classList.toggle("red");

//element
console.log(boxElement);
