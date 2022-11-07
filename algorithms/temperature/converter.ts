export function celsiusToFahrenheit(celsius: number) {
   return 1.8 * celsius + 32;
}

export function celsiusToKelvin(celsius: number) {
   return celsius + 273.15;
}

export function fahrenheitToCelsius(fahrenheit: number) {
   return (fahrenheit - 32) / 1.8;
}

export function fahrenheitToKelvin(fahrenheit: number) {
   return (fahrenheit - 32) * 0.555555556 + 273.15;
}

export function kelvinToCelsius(kelvin: number) {
   return kelvin - 273.15;
}

export function kelvinToFahrenheit(kelvin: number) {
   return (kelvin - 273.15) * 1.8 + 32;
}
