
function getWeatherFromLocalStorage() {
    let weather = localStorage.getItem('weather');
    if (weather) {
        weather = JSON.parse(weather);
        if (new Date().getTime() - weather.timestamp < 2 * 60 * 60 * 1000) {
            return weather.data;
        }
    }
    return null;
}


function saveWeatherToLocalStorage(data) {
    localStorage.setItem('weather', JSON.stringify({
        timestamp: new Date().getTime(),
        data: data
    }));
}


function getWeatherFromApi() {
    const API_KEY = 'ad0394d7d54dbd0cc09a285bb293958a';
    const CITY = 'Odessa';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

    $.get(URL, function(data) {
        saveWeatherToLocalStorage(data);
        showWeather(data);
    });
}


function showWeather(weather) {
    let temperature = Math.round(weather.main.temp - 273.15);
    let description = weather.weather[0].description;
    let html = `Temperature: ${temperature}&deg;C<br>Description: ${description}`;
    $('#weather').html(html);
}


let weather = getWeatherFromLocalStorage();
if (weather) {
    showWeather(weather);
}
else {
    getWeatherFromApi();
}


setInterval(function() {
    let weather = getWeatherFromLocalStorage();
    if (!weather) {
        getWeatherFromApi();
    }
}, 2 * 60 * 60 * 1000);