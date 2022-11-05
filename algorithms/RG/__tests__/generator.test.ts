import { describe, expect, it } from 'vitest';

import { generateRG } from '../generator';
import { validateRG } from '../validator';

describe('generateRG', () => {
   it('should generate a valid RG', () => {
      const generatedRG = generateRG();
      const isValidRG = validateRG(generatedRG);

      expect(isValidRG).toBe(true);
   });
});
