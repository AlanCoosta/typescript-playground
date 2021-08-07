function sum(...numbers: number[]): number {
  return numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
}

export default sum;

console.log(sum(98, 2));
