function BernoulliDistribution(p, s) {
	/**
	 * ...pmf
	 * 
	 * p = probability of occurrence/ of success
	 	s = 0- failure, 1- Success
	 * https://www.sciencedirect.com/topics/mathematics/bernoulli-distribution
	 */

	if (s == 0) {
		return 1 - p;
	} else if (s == 1) {
		return p;
	} else {
		return "Invalid Parameter";
	}
}

module.exports = BernoulliDistribution;
