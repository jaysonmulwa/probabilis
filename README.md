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

# Binomial Distribution


## License

[MIT](LICENSE)




