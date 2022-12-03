export { };

const lines = (await Deno.readTextFile("./input.txt")).split("\n");

const a = {
  X: "A", // rock
  Y: "B", // paper
  Z: "C", // scissors
}

const points = {
  X: 1,
  Y: 2,
  Z: 3
}

const score = lines.reduce((total, line) => {
  if (line) {
    const [first, last] = line.split(' ');
    total += points[last];
    const lastA = a[last];

    if (first === lastA) {
      total += 3
    }
    if (first === "B" && lastA === "C") {
      total += 6;
    }
    if (first === "C" && lastA === "A") {
      total += 6;
    }
    if (first === "A" && lastA === "B") {
      total += 6;
    }
  }
  return total;
}, 0);

console.log(score)
