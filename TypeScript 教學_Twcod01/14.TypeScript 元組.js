/* 我們知道陣列中元素的資料型態都一般是相同的（any[] 型別的陣列可以不同），如果儲存的元素資料型態不同，則需要使用元組。
元組中允許儲存不同類型的元素，元組可以作為引數傳遞給函式。*/
//宣告一個元組並初始化：
var mytuple = [10, "Twcode01"];
//或者我們可以先宣告一個空元組，然後再初始化：
var mytuple1 = [];
mytuple1[0] = 120;
mytuple1[1] = 234;
//存取元組
var mytuple = [10, "Twcode01"]; // 建立元組
console.log(mytuple[0]);
console.log(mytuple[1]);
//底下太基礎, 跳
