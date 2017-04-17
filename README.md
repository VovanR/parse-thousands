# parse-thousands

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Parse thousands with custom separator: '1,000,000.1' => 1000000.1

Demo: [vovanr.github.io/parse-thousands][demo]

## Install

```
npm install --save parse-thousands
```

## Usage

```js
var parseThousands = require('parse-thousands');

parseThousands('1 000');
//=> 1000

parseThousands('5000');
//=> 5000

parseThousands('1`000`000');
//=> 1000000

parseThousands("10'000");
//=> 10000

parseThousands('-100 000');
//=> -100000

parseThousands('10 000.0001')
//=> 10000.0001

parseThousands();
//=> ''
```

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[demo]: http://vovanr.github.io/parse-thousands

[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/parse-thousands
[npm-image]: http://img.shields.io/npm/v/parse-thousands.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/parse-thousands
[travis-image]: http://img.shields.io/travis/VovanR/parse-thousands.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/VovanR/parse-thousands
[coveralls-image]: http://img.shields.io/coveralls/VovanR/parse-thousands.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/parse-thousands
[depstat-image]: https://david-dm.org/VovanR/parse-thousands.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/parse-thousands
[depstat-dev-image]: https://david-dm.org/VovanR/parse-thousands/dev-status.svg?style=flat-square
