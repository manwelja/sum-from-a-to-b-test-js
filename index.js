

const sum = function(fromN, toN) {
// Sum all the values from fromN up to toN
//   So if we called the function with the following values: sum(3, 7), it would sum 3 + 4 + 5 + 6 + 7 and output 25.
// For this exercise, we can safely assume that fromN will always be less than or equal to toN.
  let result = 0;

  if (fromN <= toN) {
    return fromN + sum(fromN + 1, toN);
  }
  return result;
};

module.exports = sum;
//console.log(sum(3,7));
