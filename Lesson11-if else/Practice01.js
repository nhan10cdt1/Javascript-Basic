// if - else

/**
 * convert to boolean
 * 0
 * false
 * '' ,""
 * underfined
 * NaN
 * null
 *-> FALSE
 */

var fullName = "nhannguyen";

if (fullName) {
    console.log("Điều kiện là true");
} else {
    console.log("Điều kiện là false");
}

var date = 2;
if (date === 2) {
    console.log("Hôm nay là thứ 2");
} else if ((date = 3)) {
    console.console.log("Hôm nay là thứ 3");
} else {
    console.log("Không biết là thứ mấy hết ! ");
}