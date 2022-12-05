export { };

const lines = (await Deno.readTextFile("./input.txt")).split("\n");

const priorityCalculator = (character: string): number => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return characters.indexOf(character) + 1;
}

console.log(lines.reduce((total, line) => {
  if (line) {
    const first = line.substring(0, line.length / 2).split("");
    const second = line.substring(line.length / 2).split("");

    let char = '';
    first.forEach((a) => {
      if (second.includes(a)) {
        char = a;
      }
    })
    total += priorityCalculator(char);
  }
  return total;
}, 0));
