export { };

const lines = (await Deno.readTextFile("./input.txt")).split("\n");

const priorityCalculator = (character: string): number => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return characters.indexOf(character) + 1;
}

let total = 0;
for (let i = 0; i < lines.length - 3; i += 3) {
  const first = lines[i].split("");
  const second = lines[i + 1].split("");
  const third = lines[i + 2].split("");

  let char = '';
  first.forEach((a) => {
    if (second.includes(a) && third.includes(a)) {
      char = a;
    }
  })

  total += priorityCalculator(char);
}

console.log(total)

