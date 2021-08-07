function sub(...numbers: number[]): number {
  return numbers.reduce((previousValue, currentValue) => {
    return previousValue - currentValue;
  });
}

export default sub;
