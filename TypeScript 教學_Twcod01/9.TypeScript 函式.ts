//函式定義
function test () {   
    // 函式定義
    console.log("呼叫函式") 
}

//呼叫函式
test()

//函式回傳值
function greet(): string { // 回傳一個字串
    return "Hello World" 
} 
 
function caller() { 
    var msg = greet() // 呼叫 greet() 函式 
    console.log(msg) 
} 
 
caller()

//帶引數函式
function add(x: number, y:number): number {
    return x + y;
}

console.log(add(1, 2))

//可選引數
function buildName(firstName: string, lastName?: string) {
    if(lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // 正確
//let result2 = buildName("Bob", "Adams", "Sr.");  // 錯誤，引數太多了
let result3 = buildName("Bob", "Adams");  // 正確

//預設引數
function calculate_discount(price:number, rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("計算結果: ",discount); 
}

calculate_discount(1000) 
calculate_discount(1000,0.30)

//剩餘引數
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和為：",sum) 
 } 

 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 //匿名函式
 var msg = function() {
     return "hello world";
 }

 console.log(msg())

 //帶引數匿名函式
 var res = function(a:number,b:number) { 
    return a*b;  
}; 

console.log(res(12,2));

//匿名函式自呼叫
(function() {
    var x = "Hello!!";
    console.log(x);
})();

//建構函式
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

//遞迴函式
function factorial(number) {
    if (number <= 0) {         // 停止執行
        return 1; 
    } else {     
        return (number * factorial(number - 1));     // 呼叫自身
    } 
};

console.log(factorial(6));      // 輸出 720

//Lambda 函式
var foo = (x:number)=>10 + x 
console.log(foo(100))      //輸出結果為 110

//
var foo1 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
} 
foo1(100)

//
var func = (x)=> { 
    if(typeof x=="number") { 
        console.log(x+" 是一個數值") 
    } else if(typeof x=="string") { 
        console.log(x+" 是一個字串") 
    }  
} 
func(12) 
func("Tom")

//函式過載
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
 
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc") 
disp(1,"xyz");