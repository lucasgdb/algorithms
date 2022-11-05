export function getCheckerTypist(eightRGNumbers: string) {
   let multiplier = 2;
   let total = 0;

   for (let i = 0; i < eightRGNumbers.length; i++) {
      total += Number(eightRGNumbers[i]) * multiplier++;
   }

   const module = total % 11;
   if (module === 0) {
      return 0;
   }

   if (module === 1) {
      return 'X';
   }

   return 11 - module;
}
