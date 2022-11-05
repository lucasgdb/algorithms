import { describe, expect, it } from 'vitest';
import { generateNumbers } from '../generateNumbers';

describe('generateNineRandomNumbers', () => {
   it('should generate 10 random numbers', () => {
      const nineNumbers = generateNumbers();

      expect(nineNumbers).toHaveLength(10);
   });

   it('should generate 20 random numbers', () => {
      const nineNumbers = generateNumbers({ amount: 20 });

      expect(nineNumbers).toHaveLength(20);
   });

   it('should throw error if amount is less or equal 0', () => {
      expect(() => generateNumbers({ amount: 0 })).toThrowError('Invalid amount');
      expect(() => generateNumbers({ amount: -1 })).toThrowError('Invalid amount');
   });
});
