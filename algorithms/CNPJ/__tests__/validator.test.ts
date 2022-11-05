import { describe, expect, it } from 'vitest';

import { validateCNPJ } from '../validator';

describe('validateCNPJ', () => {
   describe('validating true CNPJs', () => {
      it('should validate true CNPJ', () => {
         const validCNPJ = '77316344000139';
         const validatedCNPJ = validateCNPJ(validCNPJ);

         expect(validatedCNPJ).toBe(true);
      });

      it('should validate true CNPJ', () => {
         const validCNPJ = '77.717.074/0001-78';
         const validatedCNPJ = validateCNPJ(validCNPJ);

         expect(validatedCNPJ).toBe(true);
      });

      it('should validate true CNPJ', () => {
         const validCNPJ = '27.895.058/0001-05';
         const validatedCNPJ = validateCNPJ(validCNPJ);

         expect(validatedCNPJ).toBe(true);
      });

      it('should validate true CNPJ', () => {
         const validCNPJ = '86.155.505/0001-40';
         const validatedCNPJ = validateCNPJ(validCNPJ);

         expect(validatedCNPJ).toBe(true);
      });

      it('should validate true CNPJ', () => {
         const validCNPJ = '90.014.583/0001-00';
         const validatedCNPJ = validateCNPJ(validCNPJ);

         expect(validatedCNPJ).toBe(true);
      });
   });

   describe('validating false CNPJs', () => {
      it('should validate false CNPJ', () => {
         const invalidCNPJ = '77316344000132';
         const validatedCNPJ = validateCNPJ(invalidCNPJ);

         expect(validatedCNPJ).toBe(false);
      });

      it('should validate false CNPJ', () => {
         const invalidCNPJ = '77.316.344/0001-34';
         const validatedCNPJ = validateCNPJ(invalidCNPJ);

         expect(validatedCNPJ).toBe(false);
      });
   });

   it('should throw an error if CNPJ has more than 14 characters', () => {
      const invalidCNPJ = '123456780001123';
      expect(() => validateCNPJ(invalidCNPJ)).toThrowError('CNPJ must have 14 characters length');
   });

   it('should throw an error if CNPJ has less than 9 characters', () => {
      const invalidCNPJ = '1234567800012';
      expect(() => validateCNPJ(invalidCNPJ)).toThrowError('CNPJ must have 14 characters length');
   });

   it('should throw an error if CNPJ does not have only numbers', () => {
      const invalidCNPJ = '123456780001xx';
      expect(() => validateCNPJ(invalidCNPJ)).toThrowError('CNPJ must have only numbers');
   });
});
