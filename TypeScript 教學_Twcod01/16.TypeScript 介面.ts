/*介面是一系列抽象方法的宣告，是一些方法特徵的群集，這些方法都應該是抽象的，
需要由具體的類去實現，然後第三方就可以透過這組抽象方法呼叫，讓具體的類執行具體的方法。*/

/*範例
以下例項中，我們定義了一個介面 IPerson，接著定義了一個變數 customer，它的型別是 IPerson。
customer 實現了介面 IPerson 的屬性和方法。*/
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
 
console.log("Customer 物件 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  
 
var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
} 
 
console.log("Employee  物件 ") 
console.log(employee.firstName) 
console.log(employee.lastName)

/*聯合型別和介面
以下例項演示了如何在介面中使用聯合型別：*/
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
 
// commandline 是字串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
 
// commandline 是字串陣列
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  
 
// commandline 是一個函數表示式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
console.log(fn());

