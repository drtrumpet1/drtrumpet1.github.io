var today = new Date();
var dd = today.getDate();
var ww = today.getDay();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";


if(dd<10) {
    dd = '0'+ dd
} 

if(mm<10) {
    mm = '0'+ mm
} 

document.getElementById("date").innerHTML=today = weekday[ww] + ", " + dd + " " + mm + " " + yyyy;
