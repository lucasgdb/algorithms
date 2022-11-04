import { getFirstCheckerTypist } from './utils/getFirstCheckerTypist';
import { getSecondCheckerTypist } from './utils/getSecondCheckerTypist';

export function validateCPF(CPF: string) {
   const transformedCPF = CPF.trim().replace(/[.-]/g, '');

   const regExp = new RegExp(/[^0-9]/g);
   if (regExp.test(transformedCPF)) {
      throw new Error('CPF must have only numbers');
   }

   if (transformedCPF.length !== 11) {
      throw new Error('CPF must have 11 characters length');
   }

   if (
      transformedCPF === '11111111111' ||
      transformedCPF === '22222222222' ||
      transformedCPF === '33333333333' ||
      transformedCPF === '44444444444' ||
      transformedCPF === '55555555555' ||
      transformedCPF === '66666666666' ||
      transformedCPF === '77777777777' ||
      transformedCPF === '88888888888' ||
      transformedCPF === '99999999999'
   ) {
      throw new Error('Invalid CPF');
   }

   const firstNineCPFDigits = transformedCPF.substring(0, 9);
   const firstTenCPFDigits = transformedCPF.substring(0, 10);

   const firstCheckerTypist = getFirstCheckerTypist(firstNineCPFDigits).toString();
   const secondCheckerTypist = getSecondCheckerTypist(firstTenCPFDigits).toString();

   const CPFFirstCheckerTypist = transformedCPF.at(9);
   const CPFSecondCheckerTypist = transformedCPF.at(10);

   return firstCheckerTypist === CPFFirstCheckerTypist && secondCheckerTypist === CPFSecondCheckerTypist;
}
