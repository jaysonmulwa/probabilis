# probabilis 

![npm](https://img.shields.io/npm/v/probabilis?color=green&label=probabilis)
![npm](https://img.shields.io/npm/dy/probabilis)

An open-source library - collection of Probability distribution functions.

## Installation 

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install probabilis
```


## Features / Distributions included

Probabilis contains a wide-range of distribution functions:

  * Binomial Distribution
  * Negative Binomial Distribution
  * Bernoulli Distribution
  * Geometric Distribution
  * Exponential Distribution
  * Poisson Distribution
  
Even more to come!

## Usage Example

```js
const probabilis = require('probabilis')
const calculate = probabilis()

let result = calculate.Binomial(2, 1, 0.5)

console.log(result)

```

## Full API

### Reference

* n - Number of occurences
* k - kth occurence
* p - Probability of 1 occurence (Probability of success in other distributions like Bernoulli's)
* s - Discrete value (0 - failure, 1 - success)
* x - A discrete value
* gamma - Mean value


### 1. Binomial Distribution

Binomial(n, k, p)

### 2. Negative Binomial Distribution

NegativeBinomial(n, k, p)

### 3. Bernoulli Distribution

Bernoulli(p, s)

### 4. Geometric Distribution

Geometric(x, p)

### 5. Exponential Distribution

Exponential(gamma, x)

### 6. Poisson Distribution

Poisson(gamma, x)


## License

[MIT](LICENSE)




