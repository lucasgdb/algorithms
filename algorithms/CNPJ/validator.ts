import { getFirstCheckerTypist } from './utils/getFirstCheckerTypist';
import { getSecondCheckerTypist } from './utils/getSecondCheckerTypist';

export function validateCNPJ(CNPJ: string) {
   const formattedCNPJ = CNPJ.trim().replace(/[/.-]/g, '');

   const regExp = new RegExp(/[^0-9]/g);
   if (regExp.test(formattedCNPJ)) {
      throw new Error('CNPJ must have only numbers');
   }

   if (formattedCNPJ.length !== 14) {
      throw new Error('CNPJ must have 14 characters length');
   }

   const firstTwelveCNPJDigits = formattedCNPJ.substring(0, 12);
   const firstThirteenCNPJDigits = formattedCNPJ.substring(0, 13);

   const firstCheckerTypist = getFirstCheckerTypist(firstTwelveCNPJDigits);
   const secondCheckerTypist = getSecondCheckerTypist(firstThirteenCNPJDigits);

   const firstCNPJCheckerTypist = formattedCNPJ.at(12);
   const secondCNPJCheckerTypist = formattedCNPJ.at(13);

   return firstCheckerTypist === firstCNPJCheckerTypist && secondCheckerTypist === secondCNPJCheckerTypist;
}
