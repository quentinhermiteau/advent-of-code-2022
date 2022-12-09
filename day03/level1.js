const fs = require('fs');

const backpacks = fs.readFileSync('./input.txt', 'utf8').split('\n');

const total = backpacks.reduce((acc, backpack) => {
	const compartment1 = backpack.split('').slice(0, backpack.length/2)
	const compartment2 = backpack.split('').slice(backpack.length/2, backpack.length)
	const occurence = compartment1.filter(i => compartment2.includes(i))[0]
	const sub = occurence.toLowerCase() === occurence ? 97 : (65 - 26)
	
	return acc += occurence.charCodeAt(0) - sub + 1
}, 0)

console.log(total);