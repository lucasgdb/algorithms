import { describe, expect, it } from 'vitest';

import { getFibonacciSequence } from '../fibonacci';

describe('getFibonacciSequence', () => {
   it('should show the first fibonacci sequence number', () => {
      const fibonacciSequence = getFibonacciSequence(1);

      expect(fibonacciSequence).toStrictEqual([0n]);
   });

   it('should show the 2 first fibonacci sequence numbers', () => {
      const fibonacciSequence = getFibonacciSequence(2);

      expect(fibonacciSequence).toStrictEqual([0n, 1n]);
   });

   it('should show the 3 first fibonacci sequence numbers', () => {
      const fibonacciSequence = getFibonacciSequence(3);

      expect(fibonacciSequence).toStrictEqual([0n, 1n, 1n]);
   });

   it('should show the 4 first fibonacci sequence numbers', () => {
      const fibonacciSequence = getFibonacciSequence(4);

      expect(fibonacciSequence).toStrictEqual([0n, 1n, 1n, 2n]);
   });

   it('should show the 10 first fibonacci sequence numbers', () => {
      const fibonacciSequence = getFibonacciSequence(10);

      expect(fibonacciSequence).toStrictEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n]);
   });

   it('should show the 100 first fibonacci sequence numbers', () => {
      const fibonacciSequence = getFibonacciSequence(100);

      expect(fibonacciSequence).toStrictEqual([
         0n,
         1n,
         1n,
         2n,
         3n,
         5n,
         8n,
         13n,
         21n,
         34n,
         55n,
         89n,
         144n,
         233n,
         377n,
         610n,
         987n,
         1597n,
         2584n,
         4181n,
         6765n,
         10946n,
         17711n,
         28657n,
         46368n,
         75025n,
         121393n,
         196418n,
         317811n,
         514229n,
         832040n,
         1346269n,
         2178309n,
         3524578n,
         5702887n,
         9227465n,
         14930352n,
         24157817n,
         39088169n,
         63245986n,
         102334155n,
         165580141n,
         267914296n,
         433494437n,
         701408733n,
         1134903170n,
         1836311903n,
         2971215073n,
         4807526976n,
         7778742049n,
         12586269025n,
         20365011074n,
         32951280099n,
         53316291173n,
         86267571272n,
         139583862445n,
         225851433717n,
         365435296162n,
         591286729879n,
         956722026041n,
         1548008755920n,
         2504730781961n,
         4052739537881n,
         6557470319842n,
         10610209857723n,
         17167680177565n,
         27777890035288n,
         44945570212853n,
         72723460248141n,
         117669030460994n,
         190392490709135n,
         308061521170129n,
         498454011879264n,
         806515533049393n,
         1304969544928657n,
         2111485077978050n,
         3416454622906707n,
         5527939700884757n,
         8944394323791464n,
         14472334024676221n,
         23416728348467685n,
         37889062373143906n,
         61305790721611591n,
         99194853094755497n,
         160500643816367088n,
         259695496911122585n,
         420196140727489673n,
         679891637638612258n,
         1100087778366101931n,
         1779979416004714189n,
         2880067194370816120n,
         4660046610375530309n,
         7540113804746346429n,
         12200160415121876738n,
         19740274219868223167n,
         31940434634990099905n,
         51680708854858323072n,
         83621143489848422977n,
         135301852344706746049n,
         218922995834555169026n,
      ]);
   });

   it('should throw error when amount is lower than 1', () => {
      expect(() => getFibonacciSequence(0)).toThrowError('amount must be greater or equal 1');
   });

   it('should throw error when amount is not a natural number', () => {
      expect(() => getFibonacciSequence(10.5)).toThrowError('amount must be int or big int type');
   });
});
