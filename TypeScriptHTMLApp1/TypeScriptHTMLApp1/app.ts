
var name = "Michael Crump";
var fullName = "Michael Crump";

var num = 1;
var bigNumber = 123;

var something;

function helloPerson(s1: string) {
    return s1;
}


function addNumbers(num1, num2) {
    return num1 + num2;
}

addNumbers(234, "Predrag");

helloPerson(name);


interface IBook {
    title: string;
    author: string;
    bookInfo: () => string;
}

//var b:IBook = {
//    title: "Moby Dick",
//    author: "Herman Melville",
//    bookInfo: function () {
//        return this.title + " by : " + this.author;
//    }
//}

class MyBook implements IBook {
    title = "Moby Dick";
    author = "Predrag Ruzic";
    bookInfo() {
        return this.title + " by: " + this.author;
    }
}

var b = new MyBook();

b.title = "Serbian Nature";
b.author = "Predrag Ruzic";

var book = b.bookInfo();
alert(book);