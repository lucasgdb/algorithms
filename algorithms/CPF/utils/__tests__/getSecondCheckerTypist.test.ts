import { describe, expect, it } from 'vitest';

import { getSecondCheckerTypist } from '../getSecondCheckerTypist';

describe('getSecondCheckerTypist', () => {
   it('should get a specific checker typist', () => {
      const partialCPF = '7014599500';
      const checkerTypist = getSecondCheckerTypist(partialCPF);

      expect(checkerTypist).toBe('3');
   });

   it('should get a specific checker typist', () => {
      const partialCPF = '3947247508';
      const checkerTypist = getSecondCheckerTypist(partialCPF);

      expect(checkerTypist).toBe('6');
   });

   it('should get a specific checker typist with module 10', () => {
      const partialCPF = '8825337701';
      const checkerTypist = getSecondCheckerTypist(partialCPF);

      expect(checkerTypist).toBe('0');
   });
});
