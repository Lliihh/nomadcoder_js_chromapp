function onGeoOk(position){
    const API_KEY = "c0a9135078ea637c92d9692d68e8c665";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then((response)=>response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:nth-of-type(1)")
        const city = document.querySelector("#weather span:nth-of-type(2)");
        weather.innerText = `${Math.floor(data.main.temp)}°C ${data.weather[0].main}`;
        city.innerText = `@${data.name}`;
        
    });
}
function onGeoError(){
    alert("can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);