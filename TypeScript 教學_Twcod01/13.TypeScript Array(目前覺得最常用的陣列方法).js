//3.	filter()
//檢測數值元素，並回傳符合條件所有元素的陣列。
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed); // 12,130,44
//8.	map()
//透過指定函式處理陣列的每個元素，並回傳處理後的陣列。
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log("roots is : " + roots); // 1,2,3
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
