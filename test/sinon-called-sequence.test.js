'use strict';

var should = require('should/as-function');
var sinon = require('sinon');
require('should-sinon');
require('..');

describe('sinon called sequence', function () {
  var sandbox;
  var spy1;
  var spy2;
  var spy3;
  var spy4;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();

    spy1 = sandbox.spy();
    spy2 = sandbox.spy();
    spy3 = sandbox.spy();
    spy4 = sandbox.spy();

    spy1();
    spy2();
    spy3();
    spy4();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('#calledBeforeSequence', function () {
    should(spy1.calledBeforeSequence(spy2, spy3, spy4)).be.true();
    should(spy1.calledBeforeSequence(spy2, spy4)).be.true();
    should(spy1.calledBeforeSequence(spy4, spy2)).be.false();
    should(spy2.calledBeforeSequence(spy1, spy3)).be.false();
  });

  it('#calledAfterSequence', function () {
    should(spy4.calledAfterSequence(spy3, spy2, spy1)).be.true();
    should(spy4.calledAfterSequence(spy3, spy1)).be.true();
    should(spy4.calledAfterSequence(spy2, spy3)).be.false();
    should(spy3.calledAfterSequence(spy4, spy2)).be.false();
  });

  it('#calledImmediatelyBeforeSequence', function () {
    should(spy1.calledImmediatelyBeforeSequence(spy2, spy3, spy4)).be.true();
    should(spy1.calledImmediatelyBeforeSequence(spy2, spy4)).be.false();
    should(spy1.calledImmediatelyBeforeSequence(spy4, spy2)).be.false();
    should(spy2.calledImmediatelyBeforeSequence(spy1, spy3)).be.false();
  });

  it('#calledImmediatelyAfterSequence', function () {
    should(spy4.calledImmediatelyAfterSequence(spy3, spy2, spy1)).be.true();
    should(spy4.calledImmediatelyAfterSequence(spy3, spy1)).be.false();
    should(spy4.calledImmediatelyAfterSequence(spy2, spy3)).be.false();
    should(spy3.calledImmediatelyAfterSequence(spy4, spy2)).be.false();
  });
});
