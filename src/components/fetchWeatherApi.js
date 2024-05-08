//For learning purposes the API KEY is placed inside the JS File, beacuse DOTENV is not compatible with the frontend/we dont have a backend setup.
let API_KEY = "c5c7c84163854bbbbeb05611240705";

const fetchData = async function fetchDataFromWeatherApi(userSearch) {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userSearch}&callback=weatherCallback`
    const response = await fetch(url, {mode : 'cors'});
    const results = await response.json();
    console.log(results); 
  } catch (error) {
    console.log(error);
  }
};


export default fetchData;