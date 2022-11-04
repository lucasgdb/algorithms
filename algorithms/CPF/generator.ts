import { getRandomNumber } from '../../utils/getRandomNumber';
import { getFirstCheckerTypist } from './utils/getFirstCheckerTypist';
import { getSecondCheckerTypist } from './utils/getSecondCheckerTypist';

export function generateNineRandomNumbers() {
   let numbers = '';

   for (let i = 0; i < 9; i++) {
      numbers += getRandomNumber({ min: 0, max: 9 });
   }

   return numbers;
}

export function generateCPF() {
   const partialCPF = generateNineRandomNumbers();
   const firstCheckerTypist = getFirstCheckerTypist(partialCPF);
   const secondCheckerTypist = getSecondCheckerTypist(`${partialCPF}${firstCheckerTypist}`);

   const CPF = `${partialCPF}${firstCheckerTypist}${secondCheckerTypist}`;
   return CPF;
}
