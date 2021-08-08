const colors2: { [key: string]: number } = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9,
};

const colorsArray = [
  "Black",
  "Brown",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet",
  "Grey",
  "White",
];

function showNumbers(color: string[]) {
  const total = color.map((item: string) => {
    return colors2[item];
  });

  return Number(total.join(""));
}

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    console.log(showNumbers([colorsArray[i], colorsArray[j]]));
  }
}
