function hightLight([first, ...strings], ...values) {
    return values.reduce((acc, curr) => {
        [...acc, `<span>${curr}</span>`, strings.shift()], [first];
    });
}

var brand = "F12";
var course = "Javascript";

const html = hightLight `Hoc lap trinh${course} tai ${brand}!`;

console.log(html);