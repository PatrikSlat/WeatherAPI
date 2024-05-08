import "./styles/main.css";
import getLocation from "./components/htmlDataRetriever.js";
import fetchData from "./components/fetchWeatherApi.js";
//import "./assets/logo.png";


document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector("#submit-btn");
    searchBtn.addEventListener("click", () => {
      try {
        let location = getLocation();
        console.log(location);
        console.log(fetchData(location));
      } catch (error) {
        console.log("Error while fetching location", error);
      }
    });
  });
  

