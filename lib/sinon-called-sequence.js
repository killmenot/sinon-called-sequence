'use strict';

var sinon = require('sinon');
var slice = Array.prototype.slice;

function processSequence(args, method) {
  var index = 0;
  var ok = true;
  var previous;
  var current;
  var next;

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
  var args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledBefore');
}

function calledAfterSequence() {
  var args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledAfter');
}

function calledImmediatelyBeforeSequence() {
  var args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledImmediatelyBefore');
}

function calledImmediatelyAfterSequence() {
  var args = [this].concat(slice.call(arguments));

  return processSequence(args, 'calledImmediatelyAfter');
}

sinon.spy.calledBeforeSequence = calledBeforeSequence;
sinon.spy.calledAfterSequence = calledAfterSequence;
sinon.spy.calledImmediatelyBeforeSequence = calledImmediatelyBeforeSequence;
sinon.spy.calledImmediatelyAfterSequence = calledImmediatelyAfterSequence;

module.exports = sinon;
