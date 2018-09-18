'use strict';

const sinon = require('sinon');
const slice = Array.prototype.slice;

function processSequence(args, method) {
  let index = 0;
  let ok = true;
  let previous;
  let current;
  let next;

  do {
    previous = args[index - 1];
    current = args[index];
    next = args[index + 1];

    if (previous) {
      ok = previous[method](current);
    }

    if (!next) {
      break;
    }

    index++;
  } while (ok);

  return ok;
}

function calledBeforeSequence() {
  const args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledBefore');
}

function calledAfterSequence() {
  const args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledAfter');
}

function calledImmediatelyBeforeSequence() {
  const args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledImmediatelyBefore');
}

function calledImmediatelyAfterSequence() {
  const args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledImmediatelyAfter');
}

sinon.spy.calledBeforeSequence = calledBeforeSequence;
sinon.spy.calledAfterSequence = calledAfterSequence;
sinon.spy.calledImmediatelyBeforeSequence = calledImmediatelyBeforeSequence;
sinon.spy.calledImmediatelyAfterSequence = calledImmediatelyAfterSequence;

module.exports = sinon;
