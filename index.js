

const sum = function(fromN, toN) {
// Sum all the values from fromN up to toN
//   So if we called the function with the following values: sum(3, 7), it would sum 3 + 4 + 5 + 6 + 7 and output 25.
// For this exercise, we can safely assume that fromN will always be less than or equal to toN.
  if (fromN <= toN) {
    return fromN + sum(fromN + 1, toN);
  }
  return 0;
};
module.exports = sum;

