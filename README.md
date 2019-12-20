# Split on last [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/split-on-last/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/split-on-last)

Like [split-on-first](https://github.com/sindresorhus/split-on-first) but splits on the last occurence.

[![NPM Badge](https://nodei.co/npm/split-on-last.png)](https://npmjs.com/package/split-on-last)

## Install

```sh
npm install split-on-last
```

## Usage

```js
const splitOnlast = require('split-on-last');

splitOnlast('a-b-c', '-');
//=> ['a-b', 'c']

splitOnlast('key:value:value2', ':');
//=> ['key:value', 'value2']

splitOnlast('a---b---c', '---');
//=> ['a---b', 'c']

splitOnlast('a-b-c', '+');
//=> []

splitOnlast('abc', '');
//=> []
```

## API

### splitOnLast(string, seperator)

#### string

Type: `string`

The string to split.

#### seperator

Type: `string`

The separator to split on.
