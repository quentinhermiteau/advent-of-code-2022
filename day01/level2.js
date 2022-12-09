const fs = require('fs');

const elvesCalories = fs.readFileSync('./input.txt', 'utf8').split('\n\n');

const array = [];

elvesCalories.forEach(elfCalories => {
	array.push(elfCalories.split('\n').reduce((acc, value) => acc + parseInt(value) , 0))
})

const total = array.sort((a, b) => b-a).slice(0, 3).reduce((acc, value) => acc + parseInt(value) , 0);
console.log(total);