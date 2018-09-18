'use strict';

const should = require('should/as-function');
const sinon = require('sinon');
require('should-sinon');
require('..');

describe('sinon called sequence', () => {
  let sandbox;
  let spy1;
  let spy2;
  let spy3;
  let spy4;

  beforeEach(() => {
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

  afterEach(() => {
    sandbox.restore();
  });

  it('#calledBeforeSequence', () => {
    should(spy1.calledBeforeSequence(spy2, spy3, spy4)).be.true();
    should(spy1.calledBeforeSequence(spy2, spy4)).be.true();
    should(spy1.calledBeforeSequence(spy4, spy2)).be.false();
    should(spy2.calledBeforeSequence(spy1, spy3)).be.false();
  });

  it('#calledAfterSequence', () => {
    should(spy4.calledAfterSequence(spy3, spy2, spy1)).be.true();
    should(spy4.calledAfterSequence(spy3, spy1)).be.true();
    should(spy4.calledAfterSequence(spy2, spy3)).be.false();
    should(spy3.calledAfterSequence(spy4, spy2)).be.false();
  });

  it('#calledImmediatelyBeforeSequence', () => {
    should(spy1.calledImmediatelyBeforeSequence(spy2, spy3, spy4)).be.true();
    should(spy1.calledImmediatelyBeforeSequence(spy2, spy4)).be.false();
    should(spy1.calledImmediatelyBeforeSequence(spy4, spy2)).be.false();
    should(spy2.calledImmediatelyBeforeSequence(spy1, spy3)).be.false();
  });

  it('#calledImmediatelyAfterSequence', () => {
    should(spy4.calledImmediatelyAfterSequence(spy3, spy2, spy1)).be.true();
    should(spy4.calledImmediatelyAfterSequence(spy3, spy1)).be.false();
    should(spy4.calledImmediatelyAfterSequence(spy2, spy3)).be.false();
    should(spy3.calledImmediatelyAfterSequence(spy4, spy2)).be.false();
  });
});
