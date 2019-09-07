/* eslint-disable func-names, no-await-in-loop */
/* global artifacts, contract */
const traveler = require("ganache-time-traveler");

const Counter = artifacts.require("Counter");

contract("Counter", function() {
  beforeEach(async function() {
    this.counter = await Counter.new();

    // Comment this to make the "coverage" script pass
    await Promise.all(
      new Array(5).fill().map(() => {
        return traveler.advanceBlock();
      }),
    );

    // And uncomment this
    // for (let i = 0; i < 5; i += 1) {
    //   await traveler.advanceBlock();
    // }
  });

  it("increments k", async function() {
    await this.counter.incrementK();
  });

  it("decrements k", async function() {
    await this.counter.decrementK();
  });
});
