// 显示时钟    格式：当前时间：2020年4月7日--0时44分34秒
var t = null;
t = setTimeout(time, 1000); //开始运行
function time(){
    clearTimeout(t);    // 清除定时器
    dt = new Date();
    var year = dt.getFullYear();
    var mon = dt.getMonth()+1;
    var day = dt.getDate();
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    document.querySelector(".showTime").innerHTML=
    `当前时间：${year}年${mon}月${day}日--${hour}时${min}分${sec}秒`;
    t = setTimeout(time, 1000);  //设定定时器，循环运行
}
