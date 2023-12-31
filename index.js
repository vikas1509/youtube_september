var latitude, longitude;
const fetchDataButtonElement = document.getElementById("fetch-data");
fetchDataButtonElement.addEventListener("click", () => {
    
    getLatLong();
});

const success = (position) => {
    const elementsToHide = document.querySelectorAll("body *");
    elementsToHide.forEach((element) => {
      element.classList.add("fade-out");
    });
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    document.cookie = `latitude=${latitude}; path=/youtube_september/weather.html`;
    document.cookie = `longitude=${longitude}; path=/youtube_september/weather.html`;
    setTimeout(() => {
        window.location.href = "https://vikas1509.github.io/youtube_september/weather.html"
        console.log( window.location.href + "weather-details.html");
    },500)
}

const error = (error) => {
    alert("Please allow the location permission to proceed")
    console.log(error)
}

function getLatLong(){
   navigator.geolocation.getCurrentPosition(success, error);
}
