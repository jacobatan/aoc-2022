export { };

const lines = (await Deno.readTextFile("./input.txt")).split("\n");

let curr = 0;
let allCals: number[] = []

lines.forEach((line: string) => {
  if (line !== "") {
    curr += parseInt(line);
  } else {
    allCals.push(curr);
    curr = 0;
  }
})

const top = allCals.sort((a, b) => b - a).slice(0, 3);
console.log(top.reduce((a, b) => a + b, 0));
