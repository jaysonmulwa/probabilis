function PoissonDistribution(gamma, k) {
  /**
   * ...pdf
   * Gamma = mean
   * k = the discrete value x
   * https://en.wikipedia.org/wiki/Poisson_distribution
   */
  const num = Math.pow(gamma, k) * Math.exp(gamma * -1);

  const denom = factorialize(k);

  const result = num / denom;

  return result;
}

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

module.exports = PoissonDistribution;
