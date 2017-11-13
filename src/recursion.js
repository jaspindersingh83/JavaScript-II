// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let nthnumber = 1;
  if (n >= 2) {
    nthnumber = nFibonacci(n - 1) + nFibonacci(n - 2);
  }
  return nthnumber;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  let factorial = 1;
  if (n > 1) {
    factorial = n * nFactorial(n - 1);
  }
  return factorial;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const uniquevals = [];
  const getuniquevalues = (object) => {
    let allvals = [];
    const objkeys = Object.keys(object);
    for (let i = 0; i < objkeys.length; i++) {
      if (typeof object[objkeys[i]] === 'object') {
        allvals = allvals.concat(getuniquevalues(object[objkeys[i]]));
      } else {
        allvals.push(object[objkeys[i]]);
      }
    }
    return allvals;
  };
  const arr = getuniquevalues(obj);
  for (let i = 0; i < arr.length; i++) {
    if (uniquevals.includes(arr[i]) === false) {
      uniquevals.push(arr[i]);
    }
  }
  if (uniquevals.length > 1) {
    return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
