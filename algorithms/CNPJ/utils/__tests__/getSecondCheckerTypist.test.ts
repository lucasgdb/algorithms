import { describe, expect, it } from 'vitest';

import { getSecondCheckerTypist } from '../getSecondCheckerTypist';

describe('getSecondCheckerTypist', () => {
   it('should get a specific checker typist', () => {
      const partialCNPJ = '4331700800019';
      const checkerTypist = getSecondCheckerTypist(partialCNPJ);

      expect(checkerTypist).toBe('9');
   });

   it('should get a specific checker typist', () => {
      const partialCNPJ = '3167221100010';
      const checkerTypist = getSecondCheckerTypist(partialCNPJ);

      expect(checkerTypist).toBe('2');
   });

   it('should get a specific checker typist with module 10', () => {
      const partialCNPJ = '5729114800014';
      const checkerTypist = getSecondCheckerTypist(partialCNPJ);

      expect(checkerTypist).toBe('0');
   });
});
