// PreventDefault
var aElement = document.links;

for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        console.log(e.target.href);
        //Khi không chứa cái chuỗi url của F8 thì ngăn chặn hành vi mặc định.
        if (!e.target.href.startsWith("https://www.google.com/?hl=vi")) {
            e.preventDefault();
        }
    };
}