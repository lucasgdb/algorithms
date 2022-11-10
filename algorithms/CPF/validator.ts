import { getFirstCheckerTypist } from './utils/getFirstCheckerTypist';
import { getSecondCheckerTypist } from './utils/getSecondCheckerTypist';

export function validateCPF(CPF: string) {
   const formattedCPF = CPF.trim().replace(/[.-]/g, '');

   if (
      formattedCPF === '11111111111' ||
      formattedCPF === '22222222222' ||
      formattedCPF === '33333333333' ||
      formattedCPF === '44444444444' ||
      formattedCPF === '55555555555' ||
      formattedCPF === '66666666666' ||
      formattedCPF === '77777777777' ||
      formattedCPF === '88888888888' ||
      formattedCPF === '99999999999'
   ) {
      return false;
   }

   const regExp = new RegExp(/[^0-9]/g);
   if (regExp.test(formattedCPF)) {
      throw new Error('CPF must have only numbers');
   }

   if (formattedCPF.length !== 11) {
      throw new Error('CPF must have 11 characters length');
   }

   const firstNineCPFDigits = formattedCPF.substring(0, 9);
   const firstTenCPFDigits = formattedCPF.substring(0, 10);

   const firstCheckerTypist = getFirstCheckerTypist(firstNineCPFDigits);
   const secondCheckerTypist = getSecondCheckerTypist(firstTenCPFDigits);

   const CPFFirstCheckerTypist = formattedCPF.at(9);
   const CPFSecondCheckerTypist = formattedCPF.at(10);

   return firstCheckerTypist === CPFFirstCheckerTypist && secondCheckerTypist === CPFSecondCheckerTypist;
}
