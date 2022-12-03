export { };

const lines = (await Deno.readTextFile("./input.txt")).split("\n");

const a = {
  X: "LOSE",
  Y: "DRAW",
  Z: "WIN",
}

const points = {
  A: 1,
  B: 2,
  C: 3
}


// key beats value
const matchups = {
  A: "B",
  B: "C",
  C: "A",
}

const score = lines.reduce((total, line) => {
  if (line) {
    const [first, last] = line.split(' ');
    const lastA = a[last];
    if (lastA === "LOSE") {
      const foo = Object.keys(matchups).find(key => matchups[key] === first);
      total += points[foo];
    }

    if (lastA === "DRAW") {
      total += points[first] + 3;
    }

    if (lastA === "WIN") {
      const foo = matchups[first];
      total += points[foo] + 6;
    }
  }
  return total;
}, 0);

console.log(score)
