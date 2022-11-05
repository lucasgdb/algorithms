import { describe, it, expect, test } from 'vitest';

import { validateCPF } from '../validator';

describe('validateCPF', () => {
   describe('validating true CPFs', () => {
      it('should validate a true CPF', () => {
         const validCPF = '96027147008';
         const validatedCPF = validateCPF(validCPF);

         expect(validatedCPF).toBe(true);
      });

      it('should validate a true CPF', () => {
         const validCPF = '37656834001';
         const validatedCPF = validateCPF(validCPF);

         expect(validatedCPF).toBe(true);
      });

      it('should validate a true CPF', () => {
         const validCPF = '882.533.770-10';
         const validatedCPF = validateCPF(validCPF);

         expect(validatedCPF).toBe(true);
      });
   });

   describe('validating false CPFs', () => {
      it('should validate a false CPF', () => {
         const invalidCPF = '96027147009';
         const validatedCPF = validateCPF(invalidCPF);

         expect(validatedCPF).toBe(false);
      });

      it('should validate a false CPF', () => {
         const invalidCPF = '37655834001';
         const validatedCPF = validateCPF(invalidCPF);

         expect(validatedCPF).toBe(false);
      });

      it('should validate a false CPF', () => {
         const invalidCPF = '376.558.340-01';
         const validatedCPF = validateCPF(invalidCPF);

         expect(validatedCPF).toBe(false);
      });
   });

   it('should throw an error if CPF has more than 11 characters', () => {
      const invalidCPF = '123456789012';
      expect(() => validateCPF(invalidCPF)).toThrowError('CPF must have 11 characters length');
   });

   it('should throw an error if CPF has less than 11 characters', () => {
      const invalidCPF = '1234567890';
      expect(() => validateCPF(invalidCPF)).toThrowError('CPF must have 11 characters length');
   });

   it('should throw an error if CPF does not have only numbers', () => {
      const invalidCPF = '123456789dd';
      expect(() => validateCPF(invalidCPF)).toThrowError('CPF must have only numbers');
   });

   it('should throw an error if CPF has eleven equal numbers', () => {
      expect(() => validateCPF('11111111111')).toThrowError('Invalid CPF');
      expect(() => validateCPF('22222222222')).toThrowError('Invalid CPF');
      expect(() => validateCPF('33333333333')).toThrowError('Invalid CPF');
      expect(() => validateCPF('44444444444')).toThrowError('Invalid CPF');
      expect(() => validateCPF('55555555555')).toThrowError('Invalid CPF');
      expect(() => validateCPF('66666666666')).toThrowError('Invalid CPF');
      expect(() => validateCPF('77777777777')).toThrowError('Invalid CPF');
      expect(() => validateCPF('88888888888')).toThrowError('Invalid CPF');
      expect(() => validateCPF('99999999999')).toThrowError('Invalid CPF');
   });
});
