/*聯合型別（Union Types）可以透過管道(|)將變數設定多種型別，賦值時可以根據設定的型別來賦值。
注意：只能賦值指定的型別，如果賦值其它型別就會報錯。*/

//宣告一個聯合型別：
var val:string|number 
val = 12 
console.log("數值為 "+ val) 
val = "Twcode01" 
console.log("字串為 " + val)

//也可以將聯合型別作為函式引數使用：
function disp(name:string|string[]) { 
    if(typeof name == "string") { 
            console.log(name) 
    } else { 
            var i; 
            for(i = 0;i<name.length;i++) { 
            console.log(name[i])
            } 
    } 
} 
disp("Twcode01") 
console.log("輸出陣列....") 
disp(["Twcode01","Google","Taobao","Facebook"])

//聯合型別陣列
//我們也可以將陣列宣告為聯合型別：
var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**數值陣列**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  
 
arr = ["Twcode01","Google","Taobao"] 
console.log("**字串數值**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}