async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '41829a29609f0dc7462ad2db8faf63d7'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            console.error('API Error:', data); // Log error details to the console
            document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Fetch Error:', error); // Log fetch errors to the console
        document.getElementById('weather').innerHTML = `<p>Error fetching weather data</p>`;
    }
}
