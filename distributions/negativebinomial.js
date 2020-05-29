function NegativeBinomialDistribution(r, k, p) {
  /**
   * ...pmf
   * n = number of occurences
   * k = kth occurence
   * p = probability of 1 occurencr
   * https://en.wikipedia.org/wiki/Binomial_distribution
   */

  const pre_1_num = factorialize(k + r + 1);

  const pre_1_denom = factorialize(r - 1) * factorialize(k);

  const pre_1 = pre_1_num / pre_1_denom;

  const pre_2 = Math.pow(p, r);

  const pre_3 = Math.pow(1 - p, k);

  const result = pre_1 * pre_2 * pre_3;

  return result;
}

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

module.exports = NegativeBinomialDistribution;
