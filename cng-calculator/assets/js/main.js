const distanceKMEL = document.getElementById("trip_distance");
const fullefficiencyEL = document.getElementById("fuel_efficiency");
const fuelCostEL = document.getElementById("fuel_cost");
const calculatebtnEL = document.getElementById("calculatebtn");

calculatebtnEL.addEventListener("click", () => {

    event.preventDefault()

    if(distanceKMEL.value == 0) {
        alert('Enter The Distance ')
    } else {
        const distanceKM = distanceKMEL.value;
        const fullefficiency = fullefficiencyEL.value;
        const fuelCost = fuelCostEL.value;

        const result = (distanceKM / fullefficiency) * fuelCost;

        console.log(result);

        const msg = "Your fuel cost will be  around: ₹" + result
        alert(msg)
    }

 
 

  
});
