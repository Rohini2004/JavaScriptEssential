function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'daf111bd9937303ea83f14b2bd791fd9';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 401 || data.cod === "401") {
                weatherInfo.innerHTML = `<p>Error: Invalid API key. Please check your API key.</p>`;
                return;
            }
            if (data.cod !== 200 && data.cod !== "200") {
                weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
                return;
            }
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails );
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails );
