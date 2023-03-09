// Write your JavaScript code here!

window.addEventListener("load", function() {


    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    const list = document.getElementById("faultyItems");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {


       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let i = pickPlanet(listedPlanets)
        console.log(i)
        let target = document.getElementById("missionTarget")
        console.log(target)
        addDestinationInfo(target,listedPlanets[i].name, listedPlanets[i].diameter, listedPlanets[i].star, listedPlanets[i].distance, listedPlanets[i].moons, listedPlanets[i].image)
    })
    let launchform = document.querySelector("form")

    launchform.addEventListener("submit", function(event) {
        list.style.visibility = "visible"
        console.log(pilotName.value)
        formSubmission(document,pilotName.value,copilotName.value,fuelLevel.value,cargoMass.value)
            event.preventDefault();
    })
});