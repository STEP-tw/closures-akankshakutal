const makeConstant = function (value) {
  const generateconstantValue = function () {
    const constantValue = value;
    return constantValue;
  }
  return generateconstantValue;
};

const makeCounterFromN = function (count) {
  let counter = count;
  const getCount = function () {
    return counter ++;
  }
  return getCount;
};

const makeCounterFromZero = function () {
  let counter = 0;
  const getCount = function () {
    return counter ++;
  }
  return getCount;
};

const makeDeltaTracker = function (count) {
  let delta = {old : 0 , delta : 0 , new : count};
  const trackDelta = function(value) { 
    delta.old = delta.new;
    if (!value) {
      delta.delta = 0;
      delta.new = count;
    } else {
      delta.new += value
      delta.delta = value;
    }
     return delta;
  }
  return trackDelta;
};

const makeFiboGenerator = function (number1,number2) {
  let firstNum,secondNum;
  if(number1 == undefined && number2 == undefined) {
    firstNum = -1;
    secondNum = 1;
  } 
  if(number2 == undefined && number1 != undefined) {
    firstNum = -number1;
    secondNum = number1;
  } 
  if(number1 != undefined && number2 != undefined){
    secondNum = number2 - number1;
    firstNum = number1 - secondNum;
  }
  const getNextFiboNum = function() {
    let thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
    return thirdNum;
  }
  return getNextFiboNum;
};

const makeCycler = function(colors) {
  const colours = [];
  for(let index=0; index <colors.length; index++) {
    colours[index] = colors[index];
  }
  let index = 0;
  const cycleColours = function() { 
    if(index < colours.length) {
      index ++;
      return colours[index-1];
    }
    index = 1;
    return colours[index-1];
  }
  return cycleColours;
};

const curry = function (functionRef,number) {
  const func = functionRef;
  const addTwo = function(value1,value2) {
   return  func(number,value1,value2);
  }
  return addTwo;
};

const compose = function (func1,func2) {
  const lastPosition = function (dataset1,dataset2) {
   let result = func2(dataset1,dataset2)
    result = func1(result);
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
