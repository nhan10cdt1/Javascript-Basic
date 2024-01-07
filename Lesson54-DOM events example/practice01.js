// Dom events
/*
  1. input / select 
  2. Key up / Key down 
 */

/*
- Lấy ra value của ô input 
- Kiểm tra tính trạng checkbox
- Lấy giá trị của combobox
*/
// text box
var inputElement = document.querySelector('input[type="text"]');

// Sự kiện xảy ra khi input
inputElement.oninput = function (e) {
  console.log(e.target.value);
};

// Khi thay đổi , click ra ngoài để thoát blur sự kiện mới xảy ra.
inputElement.onchange = function (e) {
  console.log(e.target.value);
};
