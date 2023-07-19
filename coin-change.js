// Given an array of coins [] of size N representing different types of currency and an integer sum
// The task is to find the number of ways to make sum by using different combinations from coins []
// Assume that you have an infinite supply of each type of coin
//

// explanation: there are four solutions; [1, 1, 1, 1], [1, 1, 2], [2 , 2], [1, 3]


const findCoinChange = function(coinArr, sum, n) {

  // pre
  if (sum === 0) {
    return 1;
  }

  if (sum < 0) {
    return 0;
  }

  if (n <= 0) {
    return 0;
  }

  // recurse
  // two conditions to consider 
  const excludingCoin = findCoinChange(coinArr, sum, n - 1); // don't use value of current coin, move on 
  const includingCoin = findCoinChange(coinArr, sum - coinArr[n - 1], n); // use value of current coin, subtract

  //post 
  return includingCoin + excludingCoin

}

const coins = [1, 2, 3];
const n = coins.length;
console.log(findCoinChange(coins, 4, n))
