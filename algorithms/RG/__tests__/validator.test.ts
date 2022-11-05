import { describe, expect, it } from 'vitest';

import { validateRG } from '../validator';

describe('validateRG', () => {
   describe('validating true RGs', () => {
      it('should validate true RG', () => {
         const validRG = '149292557';
         const validatedRG = validateRG(validRG);

         expect(validatedRG).toBe(true);
      });

      it('should validate true RG', () => {
         const validRG = '14.929.255-7';
         const validatedRG = validateRG(validRG);

         expect(validatedRG).toBe(true);
      });

      it('should validate true RG', () => {
         const validRG = '60.059.211-X';
         const validatedRG = validateRG(validRG);

         expect(validatedRG).toBe(true);
      });

      it('should validate true RG', () => {
         const validRG = '60.059.211-x';
         const validatedRG = validateRG(validRG);

         expect(validatedRG).toBe(true);
      });
   });

   describe('validating false RGs', () => {
      it('should validate false RG', () => {
         const invalidRG = '149292537';
         const validatedRG = validateRG(invalidRG);

         expect(validatedRG).toBe(false);
      });

      it('should validate false RG', () => {
         const invalidRG = '14.929.253-7';
         const validatedRG = validateRG(invalidRG);

         expect(validatedRG).toBe(false);
      });

      it('should validate false RG', () => {
         const invalidRG = '14929253x';
         const validatedRG = validateRG(invalidRG);

         expect(validatedRG).toBe(false);
      });

      it('should validate false RG', () => {
         const invalidRG = '14.929.253-x';
         const validatedRG = validateRG(invalidRG);

         expect(validatedRG).toBe(false);
      });
   });

   it('should throw an error if RG has more than 9 characters', () => {
      const invalidRG = '1234567890';
      expect(() => validateRG(invalidRG)).toThrowError('RG must have 9 characters length');
   });

   it('should throw an error if RG has less than 9 characters', () => {
      const invalidRG = '12345678';
      expect(() => validateRG(invalidRG)).toThrowError('RG must have 9 characters length');
   });

   it('should throw an error if RG does not have only numbers or X', () => {
      const invalidRG = '12345678d';
      expect(() => validateRG(invalidRG)).toThrowError('RG must have only numbers or X');
   });

   it('should throw an error if RG is invalid', () => {
      const invalidRG = 'xxxxxxxxx';
      expect(() => validateRG(invalidRG)).toThrowError('Invalid RG');
   });
});
