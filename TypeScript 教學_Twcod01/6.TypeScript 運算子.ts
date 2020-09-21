//算術運算子
var num1:number = 10
var num2:number = 2
var res:number = 0
   
res = num1 + num2
console.log("加:        "+res);

res = num1 - num2;
console.log("減: "+res)

res = num1*num2
console.log("乘:    "+res)

res = num1/num2
console.log("除:   "+res)
   
res = num1%num2
console.log("餘數:   "+res)

num1++
console.log("num1 自增運算: "+num1)

num2--
console.log("num2 自減運算: "+num2)

//關係運算子
var num1:number = 5;
var num2:number = 9;
 
console.log("num1 的值為: "+num1); 
console.log("num2 的值為:"+num2);
 
var res1 = num1>num2 
console.log("num1 大於n num2: "+res)
 
res1 = num1<num2 
console.log("num1 小於 num2: "+res)  
 
res1 = num1>=num2 
console.log("num1 大於或等於  num2: "+res)
 
res1 = num1<=num2
console.log("num1 小於或等於 num2: "+res)  
 
res1 = num1==num2 
console.log("num1 等於 num2: "+res)  
 
res1 = num1!=num2  
console.log("num1 不等於 num2: "+res)

//邏輯運算子
var avg:number = 20; 
var percentage:number = 90; 
 
console.log("avg 值為: "+avg+" ,percentage 值為: "+percentage);
    
var res2:boolean = ((avg>50)&&(percentage>80)); 
console.log("(avg>50)&&(percentage>80): ",res);
 
var res2:boolean = ((avg>50)||(percentage>80)); 
console.log("(avg>50)||(percentage>80): ",res);
 
var res2:boolean=!((avg>50)&&(percentage>80)); 
console.log("!((avg>50)&&(percentage>80)): ",res);

//短路運算子(&& 與 ||)
var a = 10 
var result = ( a<10 && a>5)

//位運算子
var a:number = 2;   // 二進位制 10 
var b:number = 3;   // 二進位制 11
    
var result2; 
        
result2 = (a & b);     
console.log("(a & b) => ",result2);
            
result2 = (a | b);          
console.log("(a | b) => ",result2); 
        
result2 = (a ^ b);  
console.log("(a ^ b) => ",result2);
    
result2 = (~b); 
console.log("(~b) => ",result2);
 
result2 = (a << b); 
console.log("(a << b) => ",result2); 
 
result2 = (a >> b); 
console.log("(a >> b) => ",result2);
 
result2 = (a >>> 1); 
console.log("(a >>> 1) => ",result2);

//指定運算子
var a: number = 12 
var b:number = 10  
 
a = b 
console.log("a = b: "+a)
 
a += b
console.log("a+=b: "+a)
 
a -= b 
console.log("a-=b: "+a)
 
a *= b 
console.log("a*=b: "+a)
 
a /= b 
console.log("a/=b: "+a)    
 
a %= b 
console.log("a%=b: "+a)

//三元運算子 (?)
var num:number = -2 
var result3 = num > 0 ? "大於 0" : "小於 0，或等於 0" 
console.log(result)

//型別運算子
//typeof 運算子
var num = 12 
console.log(typeof num);   //輸出結果: number

//其他運算子
//負號運算子(-)
var x:number = 4 
var y = -x; 
console.log("x 值為: ",x);   // 輸出結果 4 
console.log("y 值為: ",y);   // 輸出結果 -4

//字串運算子: 連接運算子 (+)
var msg:string = "TWCODE01"+".COM" 
console.log(msg)