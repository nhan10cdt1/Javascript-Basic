var myString = "Hoc JS tai F";
/**
 INDEX OF
 1.Không có thì trả về -1; 
 2.index tính từ 0 sau đó tăng dần
 3.Trả về vị trí đầu tiên trong chuỗi tìm kiếm
 4.Tham số thứ hai là vị trí bắt đầu tìm kiếm
 */
console.log(myString.indexOf("JS", 2));

/**
 LAST INDEX OF 
 1.Tìm vị trí của phần tử cuối cùng 
 2.Không tìm được thì trả về -1
 */
console.log(myString.lastIndexOf("JS"));

/**
 SEARCH
 1.Không hổ trợ tham số thứ 2 như index of
 2.Hỗ trợ tìm kiếm bằng biểu thức chính quy
 */
console.log(myString.search("JS"));