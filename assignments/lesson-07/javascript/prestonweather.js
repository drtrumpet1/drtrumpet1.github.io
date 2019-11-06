// Preston Forecast - City code 5604473


var prestonWeather = new XMLHttpRequest
prestonWeather.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c427e1a5e147c6c4a5b135f5afe1e94f&units=imperial', true);
prestonWeather.send();
prestonWeather.onload = function () {

    var weatherInfo = JSON.parse(prestonWeather.responseText);
    console.log(weatherInfo);

    document.getElementById('currentWeather').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    var windChill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16) + 0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16);
    windChill = Math.round(windChill);
    document.getElementById("windChill").innerHTML = windChill;
}