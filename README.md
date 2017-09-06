# Sinon called sequence

[![Dependency Status](https://gemnasium.com/badges/github.com/killmenot/sinon-called-sequence.svg)](https://gemnasium.com/github.com/killmenot/sinon-called-sequence)
[![Build Status](https://travis-ci.org/killmenot/sinon-called-sequence.svg?branch=master)](https://travis-ci.org/killmenot/sinon-called-sequence)
[![Coverage Status](https://coveralls.io/repos/github/killmenot/sinon-called-sequence/badge.svg?branch=master)](https://coveralls.io/github/killmenot/sinon-called-sequence?branch=master)

Patch [sinon](https://sinonjs.org "sinon") to provide methods that allows to check spy invocation with called before/after sequence of spies.


## Install

```
npm i sinon sinon-called-sequence --save-dev
```


## How to use?

```js
const sinon = require('sinon');
require('sinon-called-sequence');

const spy1 = sinon.spy();
const spy2 = sinon.spy();
const spy3 = sinon.spy();
const spy4 = sinon.spy();

spy1();
spy2();
spy3();
spy4();

spy1.calledBeforeSequence(spy2, spy4); // true
spy1.calledImmediatelyBeforeSequence(spy2, spy3, spy4); // true
spy4.calledAfterSequence(spy3, spy1); // true
spy4.calledImmediatelyAfterSequence(spy3, spy2, spy1); // true
```


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.