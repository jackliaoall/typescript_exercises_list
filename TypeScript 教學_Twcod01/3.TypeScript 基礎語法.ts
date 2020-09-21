//TypeScript 物件導向程式設計例項：

class Site {
    name(): void {
        console.log("Twcode01")
    }
}
var obj = new Site();
obj.name();

/*以上例項定義了一個類 Site，該類有一個方法 name()，該方法在終端上輸出字串 Twcode01。

new 關鍵字建立類的物件，該物件呼叫方法 name()。

編譯後生成的 JavaScript 程式碼如下：

var Site = (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Twcode01");
    };
    return Site;
}());
var obj = new Site();
obj.name();*/