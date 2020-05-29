function GeometricDistribution(k, p) {
  /**
   * ...pmf
   * k = the discrete value x
   * p = probability of occurrence
   * https://www.sciencedirect.com/topics/mathematics/bernoulli-distribution
   */
  const result = p * Math.pow(1 - p, k - 1);

  return result;
}

module.exports = GeometricDistribution;
