//範例
var uname = "Twcode01";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("名字: " + uname);
console.log("第一個科目成績: " + score1);
console.log("第二個科目成績: " + score2);
console.log("總成績: " + sum);
//TypeScript 遵循強型別，如果將不同的型別賦值給變數會編譯錯誤，如下例項：
//var num: number = "hello"     // 這個程式碼會編譯錯誤
//型別斷言（Type Assertion）
//型別斷言可以用來手動指定一個值的型別，即允許變數從一種型別更改為另一種型別
var str = '1';
var str2 = str;
console.log(str2);
