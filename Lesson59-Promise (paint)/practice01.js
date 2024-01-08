/*
 ## Nổi đau
  Call back hell
  Pyramid of doom
  1s in ra số 1s in ra số 2 , 1s in ra số 3
 */
setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 1000);
    }, 1000);
}, 1000);