//This temperature value will stay constant
const kelvin = 293;

//Converting kelvin to celsius as Celsius is 273 degrees less than Kelvin
var celsius = kelvin - 273;

//Converting celsius to fahrenheit
var fahrenheit = celsius * (9 / 5) + 32

//Converting decimal value to round number
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)










