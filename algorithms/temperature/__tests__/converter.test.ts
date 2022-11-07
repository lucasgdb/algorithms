import { describe, expect, it } from 'vitest';

import {
   celsiusToFahrenheit,
   celsiusToKelvin,
   fahrenheitToCelsius,
   fahrenheitToKelvin,
   kelvinToCelsius,
   kelvinToFahrenheit,
} from '../converter';

describe('celsiusToFahrenheit', () => {
   it('should convert Celsius to Fahrenheit', () => {
      const celsius = 50;
      const celsiusInFahrenheit = celsiusToFahrenheit(celsius);

      expect(celsiusInFahrenheit).toBe(122);
   });

   it('should convert Celsius to Fahrenheit', () => {
      const celsius = -50;
      const celsiusInFahrenheit = celsiusToFahrenheit(celsius);

      expect(celsiusInFahrenheit).toBe(-58);
   });

   it('should convert Celsius to Fahrenheit', () => {
      const celsius = 0;
      const celsiusInFahrenheit = celsiusToFahrenheit(celsius);

      expect(celsiusInFahrenheit).toBe(32);
   });

   it('should convert Celsius to Fahrenheit', () => {
      const celsius = -1.5;
      const celsiusInFahrenheit = celsiusToFahrenheit(celsius);

      expect(celsiusInFahrenheit).toBe(29.3);
   });

   it('should convert Celsius to Fahrenheit', () => {
      const celsius = 13.5;
      const celsiusInFahrenheit = celsiusToFahrenheit(celsius);

      expect(celsiusInFahrenheit).toBe(56.3);
   });
});

describe('celsiusToKelvin', () => {
   it('should convert Celsius to Kelvin', () => {
      const celsius = 50;
      const celsiusInKelvin = celsiusToKelvin(celsius);

      expect(celsiusInKelvin).toBe(323.15);
   });

   it('should convert Celsius to Kelvin', () => {
      const celsius = -50;
      const celsiusInKelvin = celsiusToKelvin(celsius);

      expect(celsiusInKelvin).toBe(223.14999999999998);
   });

   it('should convert Celsius to Kelvin', () => {
      const celsius = 0;
      const celsiusInKelvin = celsiusToKelvin(celsius);

      expect(celsiusInKelvin).toBe(273.15);
   });

   it('should convert Celsius to Kelvin', () => {
      const celsius = -1.5;
      const celsiusInKelvin = celsiusToKelvin(celsius);

      expect(celsiusInKelvin).toBe(271.65);
   });

   it('should convert Celsius to Kelvin', () => {
      const celsius = 13.5;
      const celsiusInKelvin = celsiusToKelvin(celsius);

      expect(celsiusInKelvin).toBe(286.65);
   });
});

describe('fahrenheitToCelsius', () => {
   it('should convert Fahrenheit to Celsius', () => {
      const fahrenheit = 50;
      const fahrenheitInCelsius = fahrenheitToCelsius(fahrenheit);

      expect(fahrenheitInCelsius).toBe(10);
   });

   it('should convert Fahrenheit to Celsius', () => {
      const fahrenheit = -50;
      const fahrenheitInCelsius = fahrenheitToCelsius(fahrenheit);

      expect(fahrenheitInCelsius).toBe(-45.55555555555556);
   });

   it('should convert Fahrenheit to Celsius', () => {
      const fahrenheit = 0;
      const fahrenheitInCelsius = fahrenheitToCelsius(fahrenheit);

      expect(fahrenheitInCelsius).toBe(-17.77777777777778);
   });

   it('should convert Fahrenheit to Celsius', () => {
      const fahrenheit = -1.5;
      const fahrenheitInCelsius = fahrenheitToCelsius(fahrenheit);

      expect(fahrenheitInCelsius).toBe(-18.61111111111111);
   });

   it('should convert Fahrenheit to Celsius', () => {
      const fahrenheit = 13.5;
      const fahrenheitInCelsius = fahrenheitToCelsius(fahrenheit);

      expect(fahrenheitInCelsius).toBe(-10.277777777777777);
   });
});

describe('fahrenheitToKelvin', () => {
   it('should convert Fahrenheit to Kelvin', () => {
      const fahrenheit = 50;
      const fahrenheitInKelvin = fahrenheitToKelvin(fahrenheit);

      expect(fahrenheitInKelvin).toBe(283.15000000799995);
   });

   it('should convert Fahrenheit to Kelvin', () => {
      const fahrenheit = -50;
      const fahrenheitInKelvin = fahrenheitToKelvin(fahrenheit);

      expect(fahrenheitInKelvin).toBe(227.594444408);
   });

   it('should convert Fahrenheit to Kelvin', () => {
      const fahrenheit = 0;
      const fahrenheitInKelvin = fahrenheitToKelvin(fahrenheit);

      expect(fahrenheitInKelvin).toBe(255.37222220799998);
   });

   it('should convert Fahrenheit to Kelvin', () => {
      const fahrenheit = -1.5;
      const fahrenheitInKelvin = fahrenheitToKelvin(fahrenheit);

      expect(fahrenheitInKelvin).toBe(254.53888887399998);
   });

   it('should convert Fahrenheit to Kelvin', () => {
      const fahrenheit = 13.5;
      const fahrenheitInKelvin = fahrenheitToKelvin(fahrenheit);

      expect(fahrenheitInKelvin).toBe(262.872222214);
   });
});

describe('kelvinToCelsius', () => {
   it('should convert Kelvin to Celsius', () => {
      const kelvin = 50;
      const kelvinInCelsius = kelvinToCelsius(kelvin);

      expect(kelvinInCelsius).toBe(-223.14999999999998);
   });

   it('should convert Kelvin to Celsius', () => {
      const kelvin = -50;
      const kelvinInCelsius = kelvinToCelsius(kelvin);

      expect(kelvinInCelsius).toBe(-323.15);
   });

   it('should convert Kelvin to Celsius', () => {
      const kelvin = 0;
      const kelvinInCelsius = kelvinToCelsius(kelvin);

      expect(kelvinInCelsius).toBe(-273.15);
   });

   it('should convert Kelvin to Celsius', () => {
      const kelvin = -1.5;
      const kelvinInCelsius = kelvinToCelsius(kelvin);

      expect(kelvinInCelsius).toBe(-274.65);
   });

   it('should convert Kelvin to Celsius', () => {
      const kelvin = 13.5;
      const kelvinInCelsius = kelvinToCelsius(kelvin);

      expect(kelvinInCelsius).toBe(-259.65);
   });
});

describe('kelvinToFahrenheit', () => {
   it('should convert Kelvin to Fahrenheit', () => {
      const kelvin = 50;
      const kelvinInFahrenheit = kelvinToFahrenheit(kelvin);

      expect(kelvinInFahrenheit).toBe(-369.66999999999996);
   });

   it('should convert Kelvin to Fahrenheit', () => {
      const kelvin = -50;
      const kelvinInFahrenheit = kelvinToFahrenheit(kelvin);

      expect(kelvinInFahrenheit).toBe(-549.67);
   });

   it('should convert Kelvin to Fahrenheit', () => {
      const kelvin = 0;
      const kelvinInFahrenheit = kelvinToFahrenheit(kelvin);

      expect(kelvinInFahrenheit).toBe(-459.66999999999996);
   });

   it('should convert Kelvin to Fahrenheit', () => {
      const kelvin = -1.5;
      const kelvinInFahrenheit = kelvinToFahrenheit(kelvin);

      expect(kelvinInFahrenheit).toBe(-462.36999999999995);
   });

   it('should convert Kelvin to Fahrenheit', () => {
      const kelvin = 13.5;
      const kelvinInFahrenheit = kelvinToFahrenheit(kelvin);

      expect(kelvinInFahrenheit).toBe(-435.36999999999995);
   });
});
