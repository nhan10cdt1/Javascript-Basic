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

// Check box
var inputElement = document.querySelector('input[type="checkbox"]');

inputElement.onchange = function (e) {
  console.log(e.target.checked);
};
