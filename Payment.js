const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum using reduce (loop through array)
const sumWithReduce = arr.reduce((acc, num) => acc + num, 0);
console.log(sumWithReduce); // 55

// Sum using formula: n(n+1)/2 (for first n natural numbers)
const n = arr.length;
const sumWithFormula = (n * (n + 1)) / 2;
console.log(sumWithFormula); // 55

// Sum using for loop
let sumWithLoop = 0;
for (let i = 0; i < arr.length; i++) {
  sumWithLoop += arr[i];
}
console.log(sumWithLoop); // 55