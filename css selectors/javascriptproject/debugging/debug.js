// debugging
const list = [[0, 1], [2, 3],[4, 5], [8, 9]].reduce(
	(accumulator, array) => {
		debugger;
		console.log('array', array);
		console.log('accumulator', accumulator);
	 return accumulator.concat(array)
	}, []);

// debugging
const list = [[0, 1], [2, 3],[4, 5], [8, 9]].reduce(
	(accumulator, array) => {
		debugger;
		return [].concat([0, 1])
	}, []);