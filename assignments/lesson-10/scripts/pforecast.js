//PRESTON IDAHO 5604473


//FORECAST
var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c427e1a5e147c6c4a5b135f5afe1e94f&units=imperial', true);
weatherForecast.send();
weatherForecast.onload = function () {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    //find date, temp and weather icon for 18:00:00 each day
    //adds each item to a separate array to use for display
    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes("18:00:00")) {

            //date
            var date = new Date(weatherInfo.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(findDate);

            //temp
            var temp = weatherInfo.list[i].main.temp;
            var temp = Math.round(temp);
            listTemp.push(temp);

            //icon
            var iconcode = weatherInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
    }
    for (var i = 1; i <= 5; i++) {
        document.getElementById("highTemp" + i).innerHTML = listTemp[i -1];
        document.getElementById("weather_icon" + i).src = listIconCode[i -1];
        document.getElementById("day" + i).innerHTML = listDate[i -1];
    }
}

