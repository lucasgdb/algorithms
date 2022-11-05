import { getRandomNumber } from './getRandomNumber';

const DEFAULT_AMOUNT = 10;

interface generateNumberProps {
   amount?: number;
}

export function generateNumbers({ amount = DEFAULT_AMOUNT }: generateNumberProps = { amount: DEFAULT_AMOUNT }) {
   if (amount <= 0) {
      throw new Error('Invalid amount');
   }

   let numbers = '';

   for (let i = 0; i < amount; i++) {
      numbers += getRandomNumber({ min: 0, max: 9 });
   }

   return numbers;
}
