//前面太基礎, 跳後面部分
/*陣列方法
下表列出了一些常用的陣列方法：
Ref: https://www.twcode01.com/typescript/ts-array.html
*/
//1.	concat()
//連接兩個或更多的陣列，並回傳結果。
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric : " + alphaNumeric); // a,b,c,1,2,3
//2.	every()
//檢測數值元素的每個元素是否都符合條件。
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("Test Value : " + passed); // false
//3.	filter()
//檢測數值元素，並回傳符合條件所有元素的陣列。
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed); // 12,130,44
//4.	forEach()
//陣列每個元素都執行一次回呼函式。
var num = [7, 8, 9];
num.forEach(function (value) {
    console.log(value);
});
//5.	indexOf()
//搜尋陣列中的元素，並回傳它所在的位置。
var index = [12, 5, 8, 130, 44].indexOf(8);
console.log("index is : " + index); // 2
//6.	join()
//把陣列的所有元素放入一個字串。
var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log("str : " + str); // First,Second,Third 
var str = arr.join(", ");
console.log("str : " + str); // First, Second, Third
var str = arr.join(" + ");
console.log("str : " + str); // First + Second + Third
//7.	lastIndexOf()
//回傳一個指定的字串值最後出現的位置，在一個字串中的指定位置從後向前搜尋。
var index = [12, 5, 8, 130, 44].lastIndexOf(8);
console.log("index is : " + index); // 2
//8.	map()
//透過指定函式處理陣列的每個元素，並回傳處理後的陣列。
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log("roots is : " + roots); // 1,2,3
//9.	pop()
//刪除陣列的最後一個元素並回傳刪除的元素。
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is : " + element); // 9
var element = numbers.pop();
console.log("element is : " + element); // 4
//10.	push()
//向陣列的末尾新增一個或更多元素，並回傳新的長度。
var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers); // 1,4,9,10 
length = numbers.push(20);
console.log("new numbers is : " + numbers); // 1,4,9,10,20
//11.	reduce()
//將陣列元素計算為一個值（從左到右）。
var total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
console.log("total is : " + total); // 6
//12.	reduceRight()
//將陣列元素計算為一個值（從右到左）。
var total = [0, 1, 2, 3].reduceRight(function (a, b) { return a + b; });
console.log("total is : " + total); // 6
//13.	reverse()
//反轉陣列的元素順序。
var arr = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + arr); // 3,2,1,0
//14.	shift()
//刪除並回傳陣列的第一個元素。
var arr = [10, 1, 2, 3].shift();
console.log("Shifted value is : " + arr); // 10
//15.	slice()
//選取陣列的的一部分，並回傳一個新陣列。
var arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log("arr.slice( 1, 2) : " + arr.slice(1, 2)); // mango
console.log("arr.slice( 1, 3) : " + arr.slice(1, 3)); // mango,banana
//16.	some()
//檢測陣列元素中是否有元素符合指定條件。
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var retval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval); // false
var retval = [12, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval); // true
//17.	sort()
//對陣列的元素進行排序。
var arr = new Array("orange", "mango", "banana", "sugar");
var sorted = arr.sort();
console.log("Returned string is : " + sorted); // banana,mango,orange,sugar
//18.	splice()
//從陣列中新增或刪除元素。
var arr = ["orange", "mango", "banana", "sugar", "tea"];
var removed = arr.splice(2, 0, "water");
console.log("After adding 1: " + arr); // orange,mango,water,banana,sugar,tea 
console.log("removed is: " + removed);
removed = arr.splice(3, 1);
console.log("After removing 1: " + arr); // orange,mango,water,sugar,tea 
console.log("removed is: " + removed); // banana
//19.	toString()
//把陣列轉換為字串，並回傳結果。
var arr = new Array("orange", "mango", "banana", "sugar");
var str = arr.toString();
console.log("Returned string is : " + str); // orange,mango,banana,sugar
//20.	unshift()
//向陣列的開頭新增一個或更多元素，並回傳新的長度。
var arr = new Array("orange", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned array is : " + arr); // water,orange,mango,banana,sugar 
console.log("Length of the array is : " + length); // 5
