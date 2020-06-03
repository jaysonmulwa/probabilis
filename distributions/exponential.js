function ExponentialDistribution(gamma, k) {
  /**
   * ...pdf
   * Gamma = mean
   * k = the discrete value x
   * https://en.wikipedia.org/wiki/Poisson_distribution
   */
  const result = gamma * Math.exp(gamma * -1 * k);

  return result;
}

module.exports = ExponentialDistribution;
