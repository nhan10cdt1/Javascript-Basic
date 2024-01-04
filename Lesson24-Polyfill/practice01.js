/*
//polyfill 
method 
Trình duyệt củ không hỗ trợ thì mình phải tác động để sử dụng được 
*/

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        if (search instanceof RegExp) {
            throw TypeError();
        }
        if (start === undefined) {
            start = 0;
        } else {
            return string.indexOf(search, start) !== -1;
        }
    };
}

"javascript".includes("javascript", 0);