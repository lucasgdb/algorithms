import { generateNumbers } from '../../utils/generateNumbers';
import { getCheckerTypist } from './utils/getCheckerTypist';

export function generateRG() {
   const eightNumbers = generateNumbers({ amount: 8 });
   const checkerTypist = getCheckerTypist(eightNumbers);

   const RG = `${eightNumbers}${checkerTypist}`;
   return RG;
}
