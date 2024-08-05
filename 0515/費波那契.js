const isFeb = (num) => {
  let a = 0;
  let b = 1;

  if (num === 0) return true;

  while (b < num) {
    [a, b] = [b, a + b];
  }

  return b === num;
};

console.log(isFeb(9));
