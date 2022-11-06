import { generateNumbers } from '../../utils/generateNumbers';
import { getCheckerTypist } from './utils/getCheckerTypist';

export function generateRG() {
   const partialRG = generateNumbers({ amount: 8 });
   const checkerTypist = getCheckerTypist(partialRG);

   const RG = partialRG + checkerTypist;
   return RG;
}
