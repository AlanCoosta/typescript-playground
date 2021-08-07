// y = ax + b
// 20 = 3x + 5
// 20 - 5 = 3x
// 15 = 3x
// x = 15/3
// x = 5

function firstDegree(y: number, a: number, b: number): number {
  return (y - b) / a;
}

console.log(firstDegree(20, 3, 5));
console.log(firstDegree(12, -2, 10));
