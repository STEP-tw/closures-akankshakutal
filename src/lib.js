const makeConstant = function (value) {
  const generateconstantValue = function () {
    return value;
  }
  return generateconstantValue;
};

const makeCounterFromN = function (initialValue) {
  let counter = initialValue;
  const getCount = function () {
    return counter ++;
  }
  return getCount;
};

const makeCounterFromZero = function () {
  return makeCounterFromN(0);
};

const makeDeltaTracker = function (initialValue) {
  let tracker = {old : 0 , delta: 0 , new : initialValue};
  const trackDelta = function(value) { 
    tracker.old = tracker.new;
    let deltaValue = value;
    if (!value) {
      deltaValue = 0;
    } 
    tracker.new = tracker.new + deltaValue;
    tracker.delta = deltaValue;
    return Object.assign({}, tracker);
  }
  return trackDelta;
};

const makeFiboGenerator = function (firstInitialValue,secondInitialValue) {
  let firstTerm,secondTerm;
  secondTerm = secondInitialValue - firstInitialValue;
  firstTerm = firstInitialValue - secondTerm;
  if(firstInitialValue == undefined && secondInitialValue == undefined) {
    firstTerm = -1;
    secondTerm = 1;
  } 
  if(secondInitialValue == undefined && firstInitialValue != undefined) {
    firstTerm = -firstInitialValue;
    secondTerm = firstInitialValue;
  } 
  const getNextFiboTerm = function() {
    let thirdTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = thirdTerm;
    return thirdTerm;
  }
  return getNextFiboTerm;
};

const makeCycler = function(list) {
  const copyOfList = list.slice();
  let index = 0;
  const cycler = function() { 
    let returnValueIndex = index %copyOfList.length;
    index ++;
    return copyOfList[returnValueIndex];
  }
  return cycler;
};

const curry = function (combiner,initialValue) {
  const combine = function(value1,value2) {
    return  combiner(initialValue,value1,value2);
  }
  return combine;
};

const compose = function (function1,function2) {
  const lastPosition = function (firstList,secondList) {
    let result = function2(firstList,secondList)
    result = function1(result);
    return result;
  };
  return lastPosition;
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
