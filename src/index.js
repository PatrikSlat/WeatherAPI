import "./styles/main.css";
import getLocation from "./components/htmlDataRetriever.js";
import fetchData from "./components/fetchWeatherApi.js";
import displayData from "./components/DisplayData.js";
//import "./assets/logo.png";


document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector("#submit-btn");
    searchBtn.addEventListener("click", () => {
      try {
        let location = getLocation();
        const fetch = fetchData(location).then((res) => {
            if(res.error){
                alert("No such value !");
            }else{
                displayData(JSON.stringify(res));
            }
        })
      } catch (error) {
        console.log("Error while fetching location", error);
      }
    });
  });
  

