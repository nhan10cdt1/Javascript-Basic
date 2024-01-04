function writelog() {
    var mystring = "";

    //In ra tham số truyền vào trên của hàm
    console.log(arguments);

    for (var param of arguments) {
        mystring += `${param} -`;
    }
    console.log(mystring);
}

writelog("log 1", "log 2", "log 3");