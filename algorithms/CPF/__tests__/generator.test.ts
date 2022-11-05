import { describe, it, expect } from 'vitest';

import { generateCPF } from '../generator';
import { validateCPF } from '../validator';

describe('generateCPF', () => {
   it('should generate a valid CPF', () => {
      const generatedCPF = generateCPF();
      const isValidCPF = validateCPF(generatedCPF);

      expect(isValidCPF).toBe(true);
   });
});
