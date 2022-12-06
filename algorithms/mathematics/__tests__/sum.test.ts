import { describe, expect, it } from 'vitest';

import { sumFirstNaturalNumbers } from '../sumFirstNaturalNumbers';

describe('sumFirstNaturalNumbers', () => {
   it('should sum the first 10 natural numbers', () => {
      const sum = sumFirstNaturalNumbers(10);
      expect(sum).toBe(45n);
   });

   it('should sum the first 100 natural numbers', () => {
      const sum = sumFirstNaturalNumbers(100);
      expect(sum).toBe(4950n);
   });

   it('should sum the first 1000 natural numbers passing a big int number', () => {
      const sum = sumFirstNaturalNumbers(1000n);
      expect(sum).toBe(499500n);
   });

   it('should throw error passing not natural number', () => {
      expect(() => sumFirstNaturalNumbers(10.5)).toThrowError('firstNaturalNumbers must be int or big int type');
   });
});
