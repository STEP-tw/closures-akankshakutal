const makeConstant = function (value) {
  constantlyReturnTwo = function () {
    const constantValue = value;
    return constantValue;
  }
  return constantlyReturnTwo;
};

const makeCounterFromN = function (countvalue) {
  let count = countvalue;
  const counter = function () {
    return count ++;
  }
  return counter;
};

const makeCounterFromZero = function () {
  let count = 0;
  const counter = function () {
    return count ++;
  }
  return counter;
};

const makeDeltaTracker = function (count) {
  let delta = {old : 0 , delta : 0 , new : count};
  const countDelta = function(value) { 
    delta .old = delta.new;
    if (!value) {
      delta.delta = 0;
      delta.new = count;
    } else {
      delta.new += value
     delta.delta = value;
    }
     return delta;
  }
  return countDelta;
};

const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
