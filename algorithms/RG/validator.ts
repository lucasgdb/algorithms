import { getCheckerTypist } from './utils/getCheckerTypist';

export function validateRG(RG: string) {
   const formattedRG = RG.trim().replace(/[.-]/g, '');

   const numbersAndXRegExp = new RegExp(/[^0-9^x^X]/g);
   if (numbersAndXRegExp.test(formattedRG)) {
      throw new Error('RG must have only numbers or X');
   }

   if (formattedRG.length !== 9) {
      throw new Error('RG must have 9 characters length');
   }

   const numbersRegExp = new RegExp(/[^0-9]/g);
   if (numbersRegExp.test(formattedRG.substring(0, 8))) {
      throw new Error('Invalid RG');
   }

   const eightNumbers = formattedRG.substring(0, 8);
   const checkerTypist = getCheckerTypist(eightNumbers);
   const RGCheckerTypist = formattedRG.at(8)?.toUpperCase();

   return checkerTypist === RGCheckerTypist;
}
