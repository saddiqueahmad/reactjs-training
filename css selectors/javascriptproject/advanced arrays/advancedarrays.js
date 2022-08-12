// Advanced Array

const array = [1, 2, 3, 4, 5];

const double = [];

const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);

// map

const ary = [1, 2, 3, 6, 9];
const mapArray = ary.map(num => num * 2);
console.log(mapArray);

// filter 

const a = [3, 4, 10, 15, 34];

const filterArray = a.filter(num => num > 5);

console.log(filterArray);

// reduce

const r = [3, 4, 5, 7, 9];
const redArray = r.reduce((accumulator, num) => {
	return accumulator + num;
}, 0);

console.log(redArray);