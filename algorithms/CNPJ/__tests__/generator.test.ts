import { describe, expect, it } from 'vitest';

import { generateCNPJ } from '../generator';
import { validateCNPJ } from '../validator';

describe('generateCNPJ', () => {
   it('should generate a valid CNPJ', () => {
      const CNPJ = generateCNPJ();
      const isValidCNPJ = validateCNPJ(CNPJ);

      expect(isValidCNPJ).toBe(true);
   });
});
