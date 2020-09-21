/*
TypeScript 是物件導向的 JavaScript。
類描述了所建立的物件共同的屬性和方法。
TypeScript 支援物件導向的所有屬性，例如 類、介面等。
*/

/*完整例項
以下例項建立來一個 Car 類，然後透過關鍵字 new 來建立一個物件並存取屬性和方法：*/
class Car { 
    // 欄位
    engine:string; 
    
    // 建構函式
    constructor(engine:string) { 
       this.engine = engine 
    }  
    
    // 方法
    disp():void { 
       console.log("函式中顯示發動機型號  :   "+this.engine) 
    } 
 } 
  
 // 建立一個物件
 var obj = new Car("XXSY1")
  
 // 存取欄位
 console.log("讀取發動機型號 :  "+obj.engine)  
  
 // 存取方法
 obj.disp()