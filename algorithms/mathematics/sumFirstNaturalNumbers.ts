export function sumFirstNaturalNumbers(firstNaturalNumbers: number | bigint) {
   if (!Number.isInteger(firstNaturalNumbers) && typeof firstNaturalNumbers !== 'bigint') {
      throw new Error('firstNaturalNumbers must be int or big int type');
   }

   let sum = 0n;

   for (let i = 0n; i < firstNaturalNumbers; i++) {
      sum += i;
   }

   return sum;
}
