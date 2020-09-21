//函式定義
function test() {
    // 函式定義
    console.log("呼叫函式");
}
//呼叫函式
test();
//函式回傳值
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 呼叫 greet() 函式 
    console.log(msg);
}
caller();
//帶引數函式
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
//可選引數
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // 正確
//let result2 = buildName("Bob", "Adams", "Sr.");  // 錯誤，引數太多了
var result3 = buildName("Bob", "Adams"); // 正確
//預設引數
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("計算結果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//剩餘引數
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和為：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//匿名函式
var msg = function () {
    return "hello world";
};
console.log(msg());
//帶引數匿名函式
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//匿名函式自呼叫
(function () {
    var x = "Hello!!";
    console.log(x);
})();
//建構函式
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
//遞迴函式
function factorial(number) {
    if (number <= 0) { // 停止執行
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // 呼叫自身
    }
}
;
console.log(factorial(6)); // 輸出 720
//Lambda 函式
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //輸出結果為 110
//
var foo1 = function (x) {
    x = 10 + x;
    console.log(x);
};
foo1(100);
//
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " 是一個數值");
    }
    else if (typeof x == "string") {
        console.log(x + " 是一個字串");
    }
};
func(12);
func("Tom");
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
