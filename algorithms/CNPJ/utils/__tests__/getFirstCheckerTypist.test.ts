import { describe, expect, it } from 'vitest';

import { getFirstCheckerTypist } from '../getFirstCheckerTypist';

describe('getFirstCheckerTypist', () => {
   it('should get a specific checker typist', () => {
      const partialCNPJ = '733257090001';
      const checkerTypist = getFirstCheckerTypist(partialCNPJ);

      expect(checkerTypist).toBe('3');
   });

   it('should get a specific checker typist', () => {
      const partialCNPJ = '383161720001';
      const checkerTypist = getFirstCheckerTypist(partialCNPJ);

      expect(checkerTypist).toBe('4');
   });

   it('should get a specific checker typist with module 10', () => {
      const partialCNPJ = '565754780001';
      const checkerTypist = getFirstCheckerTypist(partialCNPJ);

      expect(checkerTypist).toBe('0');
   });
});
