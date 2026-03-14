let workouts = 0;
let calories = 0;

function addWorkout(){
workouts++;
document.getElementById("workouts").textContent = workouts;
}

function burnCalories(){
calories += 200;
document.getElementById("calories").textContent = calories;
}
