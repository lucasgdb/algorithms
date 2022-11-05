import { describe, expect, it } from 'vitest';

import { getFirstCheckerTypist } from '../getFirstCheckerTypist';

describe('getFirstCheckerTypist', () => {
   it('should get a specific checker typist', () => {
      const partialCPF = '351860500';
      const checkerTypist = getFirstCheckerTypist(partialCPF);

      expect(checkerTypist).toBe('3');
   });

   it('should get a specific checker typist', () => {
      const partialCPF = '394724750';
      const checkerTypist = getFirstCheckerTypist(partialCPF);

      expect(checkerTypist).toBe('8');
   });

   it('should get a specific checker typist with module 10', () => {
      const partialCPF = '960271470';
      const checkerTypist = getFirstCheckerTypist(partialCPF);

      expect(checkerTypist).toBe('0');
   });
});
