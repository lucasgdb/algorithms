import { describe, expect, it } from 'vitest';

import { getCheckerTypist } from '../getCheckerTypist';

describe('getCheckerTypist', () => {
   it('should get checker typist correctly (11 - module)', () => {
      const eightNumbers = '45895554';
      const checkerTypist = getCheckerTypist(eightNumbers);

      expect(checkerTypist).toBe(1);
   });

   it('should get checker typist correctly (module = 1)', () => {
      const eightNumbers = '60059211';
      const checkerTypist = getCheckerTypist(eightNumbers);

      expect(checkerTypist).toBe('X');
   });

   it('should get checker typist correctly (module = 0)', () => {
      const eightNumbers = '42248841';
      const checkerTypist = getCheckerTypist(eightNumbers);

      expect(checkerTypist).toBe(0);
   });
});
