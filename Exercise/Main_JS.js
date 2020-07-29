var date = new Date();
var day = date.getDay();
var dateList = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Staurday"];
document.getElementById("demo").innerHTML = dateList[day];