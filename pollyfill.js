// .map

let items1 = [1, 2, 3, 4, 5];
let timesTwo = item => { item * 2;
let result1 = [];

for (let i = 0; i < items1.length; i++) {
  result1.push(items1[i] * 2) ;
}
return result1;
}

console.log(timesTwo());
console.log(items1.map(num => num * 2));

// .map - Pollyfill

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
}

const nums = [1, 2, 3, 4];

const multiplyThree = nums.myMap(num => num * 3);
const checkMyMap = nums.map(num => num * 3);
console.log(multiplyThree);
console.log(checkMyMap);


// .filter

let items2 = [1, 2, 3, 4, 5];
let isEven = item => item % 2 === 0;

let func = arr => {
  const result2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      result2.push(arr[i]);
    }
  }
  return result2;
}


console.log(func(items2));
console.log(items2.filter(num => num % 2 == 0));

// .filter - Pollyfill

Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
}

const nums2 = [10, 4, 1 ,5, 9];

const moreThanFive = nums2.myFilter(num => num > 5);
const checkMyFilter = nums2.filter(num => num > 5);
console.log(moreThanFive);
console.log(checkMyFilter);


// .reduce

let items3 = [1, 2, 3, 4, 5];

const sumReducer = (initialValue, current) => initialValue + current;

const reduce = (reducer, initialValue, array) => {
  let acc = initialValue;

  for(let i = 0; i < array.length; i++) {
    let curr = array[i]
    acc = reducer(acc, curr)
  }

  return acc;
}

const result3 = reduce(sumReducer, 0, items3);

console.log(result3);
console.log(items3.reduce((acc, curr) => acc + curr));

// .reduce - Pollyfill

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }
  return acc;
}

const nums3 = [2, 4, 6, 8];

const sum = nums3.myReduce((acc, curr) => acc + curr);
const checkMyReduce = nums3.reduce((acc, curr) => acc + curr);
console.log(sum);
console.log(checkMyReduce);