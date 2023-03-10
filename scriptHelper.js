// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.innerHTML +=
   `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">`
};

function validateInput(testInput) {
    if(testInput === "" || testInput === null || testInput === undefined){
        return "empty"
    } else if(isNaN(testInput)){
        return "Not a Number"
    } else {
        return "Is a Number"
    }
};

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {


    let allStatus = [false,false,false,false];
        //v for validate{
        let vPilot = validateInput(pilot);
        let vCopilot = validateInput(copilot);
        let vFuelLevel = validateInput(fuelLevel);
        let vCargoMass = validateInput(cargoMass);
        let arr = [vPilot, vCopilot, vFuelLevel, vCargoMass]

    //get elements by ID{
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");
    //empty fields handler
        console.log(arr)
        if(arr.includes("empty")){
            alert("All fields are required!")
        }

    //vPilot handler
        if(vPilot === "Not a Number"){
            allStatus[0] = true;
            pilotStatus.innerHTML =`1. Pilot ${pilot} is ready for launch!`
        } else if(vPilot === "empty") {
            allStatus[0] = false;
            pilotStatus.innerHTML = "1. Please enter a name"
        } else {
            allStatus[0] = false;
            pilotStatus.innerHTML =`1. ${pilot} is an invalid entry!`
            alert("Please enter a name!")
        }
    //vcoPilot handler
        if(vCopilot === "Not a Number"){
            allStatus[1] = true;
            copilotStatus.innerHTML =`2. Copilot ${copilot} is ready for Launch!`
        } else if(vCopilot === "empty") {
            allStatus[1] = false;
            copilotStatus.innerHTML = "2. Please enter a name."
        } else {
            allStatus[1] = false;
            copilotStatus.innerHTML =`2. ${copilot} is an invalid entry!`
            alert("Please enter a name!")
        }
    //vFuelLevel handler
    console.log(fuelLevel)
    console.log(vFuelLevel)
        if(vFuelLevel === "Is a Number" && fuelLevel >= 10000){
            allStatus[2] = true;
            fuelStatus.innerHTML = "3. Fuel level high enough for launch"
        } else if(vFuelLevel === "empty") {
            allStatus[2] = false;
            fuelStatus.innerHTML = "3. Enter the Fuel Level"
        }else if (vFuelLevel === "Not a Number"){
            allStatus[2] = false;
            fuelStatus.innerHTML = `3. ${fuelLevel} is not a valid entry`
            alert("Please enter a number!")
        } else {
            allStatus[2] = false;
            fuelStatus.innerHTML = "3. Fuel level too low for launch"
        }
    //vCargoMass handler
        console.log(vCargoMass)
        if(vCargoMass === "Is a Number" && cargoMass <= 10000){
            allStatus[3] = true;
            cargoStatus.innerHTML = "4. Cargo mass low enough for launch"
        } else if(vCargoMass === "empty") {
            allStatus[3] = false;
            cargoStatus.innerHTML = "4. Enter cargo mass"
        } else if(vCargoMass === "Not a Number"){
            allStatus[3] = false;
            cargoStatus.innerHTML = `3. ${cargoMass} is not a valid entry`
            alert("Please enter a number!")
        } else {
            allStatus[3] = false;
            cargoStatus.innerHTML = "4. Cargo mass too heavy for launch"
        }
    //launchStatus handler
    console.log(allStatus)
        if(allStatus[0] === true && allStatus[1] === true && allStatus[2] === true && allStatus[3] === true){
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            launchStatus.style.color = "green"
        } else if(allStatus.includes(false)){
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red"
        }

};

async function myFetch() {
    let planetsReturned;
        
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
};

function pickPlanet(planets) {
    let index = Math.floor(Math.random()* planets.length);
    return index;
};




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
