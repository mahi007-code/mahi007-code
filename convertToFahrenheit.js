function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let celsiusInput = parseFloat(prompt("Enter temperature in Celsius:"));
console.log(celsiusInput + "°C is equal to " + convertToFahrenheit(celsiusInput) + "°F");
