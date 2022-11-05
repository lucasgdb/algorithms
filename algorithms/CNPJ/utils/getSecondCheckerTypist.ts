export function getSecondCheckerTypist(thirteenCNPJNumbers: string) {
   let total = 0;
   const multipliers = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

   for (let i = 0; i < multipliers.length; i++) {
      total += Number(thirteenCNPJNumbers[i]) * multipliers[i];
   }

   const module = total % 11;
   return module < 2 ? '0' : (11 - module).toString();
}
