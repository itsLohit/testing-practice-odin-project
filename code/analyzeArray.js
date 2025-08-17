function analyzeArray(arr) {
  let obj = {
    average: getAvereage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: getLength(arr),
  };
  return obj;
}

function getAvereage(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  return temp / arr.length;
}

function getMin(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (temp > arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
}

function getMax(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
}

function getLength(arr) {
  return arr.length;
}

module.exports = analyzeArray;
