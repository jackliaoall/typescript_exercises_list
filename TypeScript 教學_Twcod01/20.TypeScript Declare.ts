/*TypeScript 宣告檔案

TypeScript 作為 JavaScript 的超集，在開發過程中不可避免要引用其他第三方的 JavaScript 的庫。雖然透過直接引用可以呼叫庫的類和方法，但是卻無法使用TypeScript 諸如型別檢查等屬性功能。為了解決這個問題，需要將這些庫里的函式和方法體去掉後只保留匯出型別宣告，而產生了一個描述 JavaScript 庫和模組訊息的宣告檔案。透過引用這個宣告檔案，就可以借用 TypeScript 的各種屬性來使用庫檔案了。

假如我們想使用第三方庫，例如 jQuery，我們通常這樣取得一個 id 是 foo 的元素：

$('#foo');
// 或
jQuery('#foo');
但是在 TypeScript 中，我們並不知道 $ 或 jQuery 是什麼東西：

jQuery('#foo');

// index.ts(1,1): error TS2304: Cannot find name 'jQuery'.
這時，我們需要使用 declare 關鍵字來定義它的型別，幫助 TypeScript 判斷我們傳入的引數型別對不對：

declare var jQuery: (selector: string) => any;

jQuery('#foo');
declare 定義的型別只會用於編譯時的檢查，編譯結果中會被刪除。

上例的編譯結果是：

jQuery('#foo');
*/