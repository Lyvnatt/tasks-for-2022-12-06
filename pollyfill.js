// .map

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