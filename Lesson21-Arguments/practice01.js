function writelog(msg) {
    console.log(msg);
}

writelog("application log");

// Kiểu dữ liệu.. javascript type data
writelog(123);

writelog(["PHP", "Javascript"]);

writelog(null);

writelog({ age: 18, address: "Japan" });

// Truyền tham số
function readFile(filename, address) {
    console.log(address);
    console.log(filename);
}

readFile("csv", "./c");

readFile();

readFile("csv");