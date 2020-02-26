var cityname, cities;
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
        var townData = request.response;
            showData(townData);
}

function showData(jsonObj) {

    cities = jsonObj['towns'];
    
    for (cityname = 0; cityname < cities.length; cityname ++) {        
        if (cities[cityname].name == 'Preston')
            populateCityData(cities[cityname]);
    }
    for (cityname = 0; cityname < cities.length; cityname ++) {        
        if (cities[cityname].name == 'Soda Springs')
            populateCityData(cities[cityname]);
    }
    for (cityname = 0; cityname < cities.length; cityname ++) {        
        if (cities[cityname].name == 'Fish Haven')
            populateCityData(cities[cityname]);
    } 
}

function populateCityData(jsonObj) {

    var city = jsonObj;

    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myImage = document.createElement('img');

    myH2.textContent = city.name;
    myH3.textContent = city.motto;
    myPara1.textContent = 'Year Founded: ' + city.yearFounded;
    myPara2.textContent = 'Population: ' + city.currentPopulation;
    myPara3.textContent = 'Average Rainfall: ' + city.averageRainfall;

    switch (myH2.textContent) {
        case "Preston":
            myImage.src = "images/town1.jpg";
            break;

        case "Soda Springs":
            myImage.src = "images/town2.jpg";
            break;

        case "Fish Haven":
            myImage.src = "images/town3.jpg";
            break;
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myImage);
    myArticle.className = "jsontown";

    section.appendChild(myArticle);

}