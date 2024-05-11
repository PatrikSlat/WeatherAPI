import windImg from "../assets/wind.png"

const displayData = function displayAndStyleFetchedData(data){
    const dataParsed = JSON.parse(data);
    console.log(dataParsed);
    const htmlElements = getElements();

    htmlElements.searchInfo.innerHTML = `Your search for ${dataParsed.location.name}, ${dataParsed.location.country}`;
    htmlElements.tempDiv.innerHTML = `Currently ${dataParsed.current.condition.text}, ${dataParsed.current.feelslike_c} °C`;
    htmlElements.windDiv.innerHTML = `Wind: ${dataParsed.current.wind_kph} km/h / ${dataParsed.current.wind_mph} mp/h`;
    htmlElements.reqDiv.innerHTML = `Weather requested at: ${dataParsed.current.last_updated}`;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = `https:${dataParsed.current.condition.icon}`;
    htmlElements.tempDiv.appendChild(weatherIcon);

    const windIcon = document.createElement("img");
    windIcon.src = windImg;
    htmlElements.windDiv.appendChild(windIcon);
    
}

const getElements = function GetHTMLelementsFromDOM(){
    const searchInfo = document.querySelector("#your-search");
    const basicInfo = document.querySelector(".basic-info");
    const tempDiv = document.querySelector("#temp-info");
    const windDiv = document.querySelector("#wind-info");
    const reqDiv = document.querySelector("#req-info");
    return { searchInfo, basicInfo, tempDiv, windDiv, reqDiv};
}

export default displayData;
