let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let highest = numbers[0], lowest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > highest) highest = numbers[i];
  if (numbers[i] < lowest) lowest = numbers[i];
}

console.log("Highest:", highest);
console.log("Lowest:", lowest);