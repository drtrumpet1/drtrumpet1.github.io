var today = new Date();

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentdate").innerHTML = weekday[d.getDay()] + ", " + month[d.getmonth()] + "/" + d.getDate()  + "/"  + d.getFullYear();