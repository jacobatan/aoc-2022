// export { };

// const lines: string[] = (await Deno.readTextFile("./input.txt")).split("\n");

// let maxCals = 0;
// let curr = 0;

// lines.forEach((line) => {
//   if (line !== "") {
//     curr += parseInt(line);
//   } else {
//     maxCals = Math.max(maxCals, curr);
//     curr = 0;
//   }
// })

// console.log(maxCals);

export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let highest = 0;

let amounts = [0];

console.log(lines)
for (const line of lines) {
  const nums = line.split("\n")
  // console.log(nums);
  // .map((s) => parseInt(s, 10));
  const total = nums.reduce((a, b) => a + b, 0);

  amounts.push(total);

  if (total > highest) {
    highest = total;
  }
}
