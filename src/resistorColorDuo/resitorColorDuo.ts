const colors: { [key: number]: string } = {
  0: "Black",
  1: "Brown",
  2: "Red",
  3: "Orange",
  4: "Yellow",
  5: "Green",
  6: "Blue",
  7: "Violet",
  8: "Grey",
  9: "White",
};

const MAX_COLORS = 2;

function showColor(n: string) {
  const splitNumbers = n.split("").slice(0, MAX_COLORS);

  const total = splitNumbers.map((item) => {
    return colors[Number(item)];
  });

  return total.join("-");
}

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    console.log(showColor(`${i}${j}`));
  }
}
