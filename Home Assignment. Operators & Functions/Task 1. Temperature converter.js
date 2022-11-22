function celsiustToKelvin(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}
let tempCelsius = 100;
console.log(`${tempCelsius}°C is equal to ${celsiustToKelvin(tempCelsius)} Kelvin\n`);

function fahrenheitToKelvin(tempFahrenheit){
    let tempKelvin = ((tempFahrenheit - 32) / 1.8) + 273.15;
    return tempKelvin;
}
let tempFahrenheit = 100;
console.log (`${tempFahrenheit}°F is equal to ${fahrenheitToKelvin(tempFahrenheit)} Kelvin`);