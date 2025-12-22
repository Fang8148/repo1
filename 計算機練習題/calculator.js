const display =document.getElementById("display");
// 連線 透過ID找到HTML裡面的輸入框
function appenToDisplay(input){
    display.value += input;
}
//當你按下按鈕函式就會被啟動 +=是累加，就像是你按下按鈕有人幫你依序紀錄蝦來

function clearDisplay(){
    display.value="";
}
// 清空螢幕的宣告function clearDisplay
// display.value是指輸入框裡面的內容

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value ="Error";
    };
}
// eval是JS裡面的計算機 會讀取螢幕上的字串並且把它當成數學公式
// try...catch是保險絲 如果你不小心輸入錯誤保障程式不會因此掛掉而是會跳到catch

// 也可以使用for迴圈去寫 就等於把onclick不用常常去打 但是會需要很多如果就怎麼樣
// 現在方式是比較直觀的方法
