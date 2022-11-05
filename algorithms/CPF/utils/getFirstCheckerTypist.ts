export function getFirstCheckerTypist(nineCPFNumbers: string) {
   let multiplier = 10;
   let total = 0;

   for (let i = 0; i < nineCPFNumbers.length; i++) {
      total += Number(nineCPFNumbers[i]) * multiplier--;
   }

   const module = (total * 10) % 11;
   return module === 10 ? 0 : module;
}
