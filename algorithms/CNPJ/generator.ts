import { generateNumbers } from '../../utils/generateNumbers';
import { getFirstCheckerTypist } from './utils/getFirstCheckerTypist';
import { getSecondCheckerTypist } from './utils/getSecondCheckerTypist';

export function generateCNPJ() {
   const partialCNPJ = `${generateNumbers({ amount: 8 })}0001`;
   const firstCheckerTypist = getFirstCheckerTypist(partialCNPJ);
   const secondCheckerTypist = getSecondCheckerTypist(`${partialCNPJ}${firstCheckerTypist}`);

   const CNPJ = `${partialCNPJ}${firstCheckerTypist}${secondCheckerTypist}`;
   return CNPJ;
}
