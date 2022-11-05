import { describe, expect, it } from 'vitest';

import { getCheckerTypist } from '../getCheckerTypist';

describe('getCheckerTypist', () => {
   it('should get checker typist correctly (11 - module)', () => {
      const partialRG = '45895554';
      const checkerTypist = getCheckerTypist(partialRG);

      expect(checkerTypist).toBe('1');
   });

   it('should get checker typist correctly (module = 1)', () => {
      const partialRG = '60059211';
      const checkerTypist = getCheckerTypist(partialRG);

      expect(checkerTypist).toBe('X');
   });

   it('should get checker typist correctly (module = 0)', () => {
      const partialRG = '42248841';
      const checkerTypist = getCheckerTypist(partialRG);

      expect(checkerTypist).toBe('0');
   });
});
