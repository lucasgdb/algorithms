export function getSecondCheckerTypist(tenCPFNumbers: string) {
   let multiplier = 11;
   let total = 0;

   for (let i = 0; i < tenCPFNumbers.length; i++) {
      total += Number(tenCPFNumbers[i]) * multiplier--;
   }

   const module = (total * 10) % 11;
   return module === 10 ? '0' : module.toString();
}
