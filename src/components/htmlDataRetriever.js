const getLocation =function getLocationAndPassToFetch(){
    try{
        let locationValue = document.querySelector("#input-field").value;
        if(locationValue === ""){
            addErrorClass();
        }else{
            return locationValue;
        }
    }catch(error){
        console.log("Error while fetching location", error);
    }
}

const addErrorClass = function LocationValueDidNotPassValidation(){
    const locationValue = document.querySelector("#input-field");
    locationValue.placeholder = "Your search is not valid !";
}


export default getLocation;