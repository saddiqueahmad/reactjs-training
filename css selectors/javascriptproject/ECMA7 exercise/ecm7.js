// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('john'); //false

// question 2;
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const isAvailable = dragons.includes("johnathan");
if(isAvailable){ 
    
    console.log("Avail in array");

}
else {
	
	console.log("not avail in array");
}

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = (num) => num**100;


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result.

power100(10000) //infinity


