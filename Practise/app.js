function sum(a, b, ...others) {
  let total = a + b;
  others.forEach((no) => {
    // total = total + no;
    total += no; //total = total + no;
  });
  return total;
}
console.log(sum(1, 2, 3, 4));
