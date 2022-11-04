import { describe, expect, it, test } from 'vitest';

import { getRandomNumber } from '../getRandomNumber';

describe('getRandomNumber', () => {
   it('should generate random number between 1 and 20', () => {
      const randomNumber = getRandomNumber();

      expect(randomNumber).toBeGreaterThanOrEqual(1);
      expect(randomNumber).toBeLessThanOrEqual(20);
   });

   it('should generate random number between 0 and 200', () => {
      const randomNumber = getRandomNumber({ min: 0, max: 200 });

      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(200);
   });

   it('should generate random number between 0 and 200', () => {
      const randomNumber = getRandomNumber({ min: -10, max: -5 });

      expect(randomNumber).toBeGreaterThanOrEqual(-10);
      expect(randomNumber).toBeLessThanOrEqual(-5);
   });

   it('should generate random number between 1 and 50', () => {
      const randomNumber = getRandomNumber({ max: 50 });

      expect(randomNumber).toBeGreaterThanOrEqual(1);
      expect(randomNumber).toBeLessThanOrEqual(50);
   });

   it('should generate random number between 10 and 20', () => {
      const randomNumber = getRandomNumber({ min: 10 });

      expect(randomNumber).toBeGreaterThanOrEqual(10);
      expect(randomNumber).toBeLessThanOrEqual(20);
   });

   test('min should not be greater or equal max', () => {
      expect(() => getRandomNumber({ min: 50, max: 20 })).toThrowError('min should not be greater or equal max');
   });
});
