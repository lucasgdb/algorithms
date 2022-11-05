import { generateNumbers } from '../../utils/generateNumbers';
import { getFirstCheckerTypist } from './utils/getFirstCheckerTypist';
import { getSecondCheckerTypist } from './utils/getSecondCheckerTypist';

export function generateCPF() {
   const partialCPF = generateNumbers({ amount: 9 });
   const firstCheckerTypist = getFirstCheckerTypist(partialCPF);
   const secondCheckerTypist = getSecondCheckerTypist(`${partialCPF}${firstCheckerTypist}`);

   const CPF = `${partialCPF}${firstCheckerTypist}${secondCheckerTypist}`;
   return CPF;
}
