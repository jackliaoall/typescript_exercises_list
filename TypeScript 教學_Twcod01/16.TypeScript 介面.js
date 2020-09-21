/*介面是一系列抽象方法的宣告，是一些方法特徵的群集，這些方法都應該是抽象的，
需要由具體的類去實現，然後第三方就可以透過這組抽象方法呼叫，讓具體的類執行具體的方法。*/
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 物件 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  物件 ");
console.log(employee.firstName);
console.log(employee.lastName);
// commandline 是字串
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
// commandline 是字串陣列
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
// commandline 是一個函數表示式
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
console.log(fn());
