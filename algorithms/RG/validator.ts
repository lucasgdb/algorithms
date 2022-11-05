import { getCheckerTypist } from './utils/getCheckerTypist';

export function validateRG(RG: string) {
   const transformedRG = RG.trim().replace(/[.-]/g, '');

   const numbersAndXRegExp = new RegExp(/[^0-9^x^X]/g);
   if (numbersAndXRegExp.test(transformedRG)) {
      throw new Error('RG must have only numbers or X');
   }

   if (transformedRG.length !== 9) {
      throw new Error('RG must have 9 characters length');
   }

   const numbersRegExp = new RegExp(/[^0-9]/g);
   if (numbersRegExp.test(transformedRG.substring(0, 8))) {
      throw new Error('Invalid RG');
   }

   const eightNumbers = transformedRG.substring(0, 8);
   const checkerTypist = getCheckerTypist(eightNumbers).toString().toUpperCase();
   const RGCheckerTypist = transformedRG.at(8)?.toUpperCase();

   return checkerTypist === RGCheckerTypist;
}
