    // const API_key = '74693ceb465537fa74a139f7cf2e466c';
    const API_key = '';

    // script.js

    const weatherForm = document.getElementById("weatherForm");
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    // Replace with your OpenWeather API key
    const API_KEY = "afa21cefd902f9a807326d3344dbc53b";

    weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();
    console.log(city);
        if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error("City not found");
        }
        const data = await response.json();
        
        console.log("data");
        console.log(data);

        // console.log("hai:=> "+data);
        // Display weather information
        displayWeather(data);
    } catch (error) {
        weatherInfo.innerHTML = `<p class="error">${error.message}</p>`;
    }
    });

    const displayWeather = (data) => {
        console.log(data);
    const { name, main, weather } = data;
    console.log(`name=> ${name}, main => ${main}, weather=> ${weather}`);
    console.log(main);
    console.log(weather);
    const temperature = main.temp;
    const description = weather[0].description;

    weatherInfo.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${description}</p>
    `;
    };

