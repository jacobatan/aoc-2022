export { };

const lines: string[] = (await Deno.readTextFile("./input.txt")).split("\n");

let maxCals = 0;
let curr = 0;

lines.forEach((line) => {
  if (line !== "") {
    curr += parseInt(line);
  } else {
    maxCals = Math.max(maxCals, curr);
    curr = 0;
  }
})

console.log(maxCals);

