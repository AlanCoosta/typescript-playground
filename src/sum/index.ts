function sum(...numbers: number[]): number {
  let total = 0;

  // for (let i = 0; i < numbers.length; i++) {
  //   total = total + numbers[i];
  // }

  for (let value of numbers) {
    total = total + value;
  }

  return total;
}

console.log(sum(30, 50));
