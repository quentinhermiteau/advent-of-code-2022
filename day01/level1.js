const fs = require('fs');

const elvesCalories = fs.readFileSync('./input.txt', 'utf8').split('\n\n');

let max = 0;

elvesCalories.forEach(elfCalories => {
	const calories = elfCalories.split('\n').reduce((acc, value) => acc + parseInt(value) , 0)
	max = calories > max ? calories : max;
})

console.log(max)