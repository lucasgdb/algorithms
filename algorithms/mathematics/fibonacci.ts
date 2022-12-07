export function getFibonacciSequence(amount: number) {
   if (!Number.isInteger(amount)) {
      throw new Error('amount must be int or big int type');
   }

   if (amount < 1) {
      throw new Error('amount must be greater or equal 1');
   }

   const sequence = [0n, 1n, 1n];

   if (amount <= 3) {
      return sequence.slice(0, amount);
   }

   for (let i = 3n; i < amount; i++) {
      const newFibonacciNumber = sequence.at(-1)! + sequence.at(-2)!;

      sequence.push(newFibonacciNumber);
   }

   return sequence;
}
