



var prestonForecast = new XMLHttpRequest
prestonForecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c427e1a5e147c6c4a5b135f5afe1e94f&units=imperial', true);
prestonForecast.send();
prestonForecast.onload = function () {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes("18:00:00")) {

            var date = new Date(weatherInfo.list[i].dt * 1000);
            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(findDate);
            
            var temp = weatherInfo.list[i].main.temp_max;
            var temp = Math.round(temp);
            listTemp.push(temp);
            
            var iconcode = weatherInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
        continue;
    }
    
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];
    
    document.getElementById("highTemp1").innerHTML = listTemp[0];
    document.getElementById("highTemp2").innerHTML = listTemp[1];
    document.getElementById("highTemp3").innerHTML = listTemp[2];
    document.getElementById("highTemp4").innerHTML = listTemp[3];
    document.getElementById("highTemp5").innerHTML = listTemp[4];
}