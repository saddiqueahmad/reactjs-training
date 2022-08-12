//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const exclamArray = [];
const newArray = array.forEach((element) => {
  exclamArray.push(element.username + '!');
})
console.log('forEach', exclamArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(element => element.username + '?');

//Filter the array to only include users who are on team: red

const filterArray = array.filter(element => element.team === 'red');

//Find out the total score of all users using reduce

const totalScore = array.reduce((acc, user) => acc.score + user.score, 0));

// (1), what is the value of i?

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((i) => {
  console.log(i);
  alert(i);

// (2), Make this map function pure:
const newArray = arrayNum.map(num => num * 2)
