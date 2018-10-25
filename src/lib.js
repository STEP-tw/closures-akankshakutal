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

const makeDeltaTracker = undefined;
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
