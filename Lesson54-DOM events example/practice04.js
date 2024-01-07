// Dom events
/*
  1. input / select 
  mouse event - e
  2. Key up / Key down   
  keyboard event - e
 */

/*
- Lấy ra value của ô input 
- Kiểm tra tính trạng checkbox
- Lấy giá trị của combobox
*/

// key down
var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeyup = function (e) {
  console.log(e.target.value);
};

//Check xem đang nhấn phím nào
inputElement.onkeyup = function (e) {
  //mã của bàn phím
  console.log(e.which);
};

//Check cho toàn trang web
document.onkeydown = function (e) {
  switch (e.which) {
    case 13:
      console.log("Exit");
      break;
  }
};
