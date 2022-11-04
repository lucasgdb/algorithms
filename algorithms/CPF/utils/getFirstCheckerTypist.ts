export function getFirstCheckerTypist(nineCPFNumbers: string) {
   let divider = 10;
   let total = 0;

   for (let i = 0; i < nineCPFNumbers.length; i++) {
      total += Number(nineCPFNumbers[i]) * divider--;
   }

   const module = (total * 10) % 11;
   return module === 10 ? 0 : module;
}
