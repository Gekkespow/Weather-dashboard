const apiKey = "";

function getWeather() {
    const city = document.getElementById('city-input').value;
    //alerts the user when nothing has been put in
    if (city == "") {
        alert("Please enter a city name")
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //sends a request to the given url, then waits for the response and converts in json
    //passes it through displayweather function
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert("Error fetching data: " + error));
}

function displayWeather(data) {
    if (data.cod !== 200) {
        alert("City not found!");
        return;
    }

    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;


    // Dynamic background

    const weatherType = data.weather[0].main.toLowerCase();
    const body = document.body;

    switch (weatherType) {
        case 'clear':
            body.style.backgroundImage = "url('C:/Desktop/Weather dashboard/clear.jpg')";
            break;
        case 'clouds':
            body.style.backgroundImage = "url('C:/Desktop/Weather dashboard/cloudy.jpg')";
            break;
        case 'rain':
        case 'drizzle':
            body.style.backgroundImage = "url('C:/Desktop/Weather dashboard/rainy.jpg')";
            break;
        case 'thunderstorm':
            body.style.backgroundImage = "url('C:/Desktop/Weather dashboard/thunder.jpg')";
            break;
        case 'snow':
            body.style.backgroundImage = "url('images/snowy.jpg')";
            break;
        default:
            body.style.backgroundImage = "url('C:/Desktop/Weather dashboard/default.jpg')";
            break;

    }
}

