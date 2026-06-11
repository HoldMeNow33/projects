/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result");
let convertBtn = document.getElementById("convert-btn");
let inputValue = document.getElementById("input-value");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

convertBtn.addEventListener("click", function(){
    let userInput = inputValue.value;

    lengthResult.textContent = `${userInput} meters = ${(userInput * meterToFeet).toFixed(3)} feet | ${userInput} feet = ${(userInput / meterToFeet).toFixed(3)} meters`;
    volumeResult.textContent = `${userInput} liters = ${(userInput * literToGallon).toFixed(3)} gallons | ${userInput} gallons = ${(userInput / literToGallon).toFixed(3)} liters`
    massResult.textContent = `${userInput} kilograms = ${(userInput * kilogramToPound).toFixed(3)} pounds | ${userinput} pounds = ${(userInput / kilogramToPound).toFixed(3)} kilograms`
}
)