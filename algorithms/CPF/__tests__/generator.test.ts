import { describe, it, expect } from 'vitest';

import { generateNineRandomNumbers, generateCPF } from '../generator';
import { validateCPF } from '../validator';

describe('generateNineRandomNumbers', () => {
   it('should generate 9 numbers', () => {
      const nineNumbers = generateNineRandomNumbers();

      expect(nineNumbers).toHaveLength(9);
   });
});

describe('generateCPF', () => {
   it('should generate a valid CPF', () => {
      const generatedCPF = generateCPF();
      const isValidCPF = validateCPF(generatedCPF);

      expect(isValidCPF).toBe(true);
   });
});
