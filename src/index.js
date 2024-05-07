import "./styles/main.css";
//import "./assets/logo.png";
//For learning purposes the API KEY is placed in the JS File, beacuse DOTENV is not compatible with the frontend
let API_KEY = "c5c7c84163854bbbbeb05611240705";

const getData = async function fetchDataFromWeatherApi() {
  try {
    // Assuming your server-side proxy is set up at /api/weather
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=london&callback=weatherCallback`, {mode : 'cors'});
    const results = await response.json();
    console.log(results); 
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getData();
});

