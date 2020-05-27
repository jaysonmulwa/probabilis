function BinomialDistribution(n, k, p) {
  /**
   * ...pdf
   * n = number of occurences
   * k = kth occurence
   * p = probability of 1 occurencr
   * https://en.wikipedia.org/wiki/Binomial_distribution
   */
  const pre_1 = combinatorialize(n, k);

  const pre_2 = Math.pow(p, k);

  const pre_3 = Math.pow(1 - p, n - k);

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

function combinatorialize(n, k) {
  const num = factorialize(n);

  const n_minus_k = n - k;

  const denom = factorialize(k) * factorialize(n_minus_k);

  const result = num / denom;

  return result;
}

module.exports = BinomialDistribution;
