/*
TypeScript 與 JavaScript 類似，支援 Number 物件。
Number 物件是原始數值的套件裝物件。
*/

//Number 物件屬性
console.log("TypeScript Number 屬性: "); 
console.log("最大值為: " + Number.MAX_VALUE); 
console.log("最小值為: " + Number.MIN_VALUE); 
console.log("負無窮大: " + Number.NEGATIVE_INFINITY); 
console.log("正無窮大:" + Number.POSITIVE_INFINITY);

//NaN 例項
var month = 0 
if( month<=0 || month >12) { 
    month = Number.NaN 
    console.log("月份是："+ month) 
} else { 
    console.log("輸入月份數值正確。") 
}

//prototype 例項
function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
} 
 
var emp = new employee(123,"admin") 
employee.prototype.email = "admin@twcode01.com" 
 
console.log("員工號: "+emp.id) 
console.log("員工姓名: "+emp.name) 
console.log("員工郵箱: "+emp.email)