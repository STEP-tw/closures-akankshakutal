const makeConstant = function (value) {
  return function () {
    return value;
  }
};

const makeCounterFromN = function (initialValue) {
  let counter = initialValue;
  return function () {
    return counter ++;
  }
};

const makeCounterFromZero = function () {
  return makeCounterFromN(0);
};

const makeDeltaTracker = function (initialValue) {
  let tracker = {old : 0 , delta: 0 , new : initialValue};
  return function(value) { 
    tracker.old = tracker.new;
    let deltaValue = value;
    if (!value) {
      deltaValue = 0;
    } 
    tracker.new = tracker.new + deltaValue;
    tracker.delta = deltaValue;
    return Object.assign({}, tracker);
  }
};

const makeFiboGenerator = function (firstInitialValue,secondInitialValue) {
  let prevTerm,currentTerm;
  currentTerm = secondInitialValue - firstInitialValue;
  prevTerm = firstInitialValue - currentTerm;
  if(firstInitialValue == undefined && secondInitialValue == undefined) {
    prevTerm = -1;
    currentTerm = 1;
  } 
  if(secondInitialValue == undefined && firstInitialValue != undefined) {
    prevTerm = -firstInitialValue;
    currentTerm = firstInitialValue;
  } 
  return function() {
    let nextTerm = prevTerm + currentTerm;
    prevTerm = currentTerm;
    currentTerm = nextTerm;
    return nextTerm;
  }
};

const makeCycler = function(list) {
  const copyOfList = list.slice();
  let index = 0;
  return function() { 
    let returnValueIndex = index %copyOfList.length;
    index ++;
    return copyOfList[returnValueIndex];
  }
};

const curry = function (combiner,initialValue) {
  return function(value1,value2) {
    return  combiner(initialValue,value1,value2);
  }
};

const compose = function (function1,function2) {
  return function (firstList,secondList) {
    let result = function2(firstList,secondList)
    result = function1(result);
    return result;
  };
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
