# Sum

### 3 way diferent to return sum.

<br/>

<b>reduce</b>

```
function sum(...numbers: number[]): number {
  return numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
}
```

<br/>

<b>for of</b>

```
function sum(...numbers: number[]): number {
  let total = 0;

  for (let value of numbers) {
    total = total + value;
  }

  return total
}
```

<br/>

<b>for</b>

```
function sum(...numbers: number[]): number {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  return total
}
```
