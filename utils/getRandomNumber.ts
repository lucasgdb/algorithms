const DEFAULT_MIN = 1;
const DEFAULT_MAX = 20;

interface getRandomNumberProps {
   min?: number;
   max?: number;
}

export function getRandomNumber(
   { min = DEFAULT_MIN, max = DEFAULT_MAX }: getRandomNumberProps = { min: DEFAULT_MIN, max: DEFAULT_MAX },
) {
   if (min >= max) {
      throw new Error('min should not be greater or equal max');
   }

   return Math.floor(Math.random() * (max - min) + min);
}
