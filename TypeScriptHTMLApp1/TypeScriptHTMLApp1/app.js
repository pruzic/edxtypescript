var name = "Michael Crump";
var fullName = "Michael Crump";

var num = 1;
var bigNumber = 123;

var something;

function helloPerson(s1) {
    return s1;
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

addNumbers(234, "Predrag");

helloPerson(name);

//var b:IBook = {
//    title: "Moby Dick",
//    author: "Herman Melville",
//    bookInfo: function () {
//        return this.title + " by : " + this.author;
//    }
//}
var MyBook = (function () {
    function MyBook() {
        this.title = "Moby Dick";
        this.author = "Predrag Ruzic";
    }
    MyBook.prototype.bookInfo = function () {
        return this.title + " by: " + this.author;
    };
    return MyBook;
})();

var b = new MyBook();

b.title = "Serbian Nature";
b.author = "Predrag Ruzic";

var book = b.bookInfo();
alert(book);
//# sourceMappingURL=app.js.map
