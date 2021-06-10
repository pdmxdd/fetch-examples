const KEY = "469dabe802f84815f9f4e7223626e12d";


window.addEventListener('load', function() {
    const weatherButton = document.getElementById('weatherButton');

    // console.log(weatherButton);

    weatherButton.addEventListener('click', function(event) {
        // console.log(event);
        const selectElement = document.getElementById('citySelect');
        // console.log(selectElement);
        // console.log(selectElement.value);
        const cityName = selectElement.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}&units=imperial`).then(function(response) {
            response.json().then(function(json) {
                // console.log(json);
                const city = json.name;
                const temp = json.main.feels_like;
                const humidity = json.main.humidity;
                const tempHigh = json.main.temp_max;
                const tempLow = json.main.temp_min;
                const paragraphElement = document.getElementById('weatherParagraph');
                paragraphElement.innerHTML = `<b>${city}</b><br />Temperature: ${temp}<br />Humidity: ${humidity}<br />High: ${tempHigh}<br />Low: ${tempLow}`;
            });
        });
    });
});

