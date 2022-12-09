const fs = require('fs');

const backpacks = fs.readFileSync('./input.txt', 'utf8').split('\n');

let total = 0;

for (let index = 0; index < backpacks.length; index+=3) {
	const group = backpacks.slice(index, index+3)
	const backpack1 = group[0].split('')
	const backpack2 = group[1].split('')
	const backpack3 = group[2].split('')
	const occurence12 = backpack1.filter(i => backpack2.includes(i))
	const occurence13 = backpack1.filter(i => backpack3.includes(i))
	const occurence = occurence12.filter(i => occurence13.includes(i))[0]
	const sub = occurence.toLowerCase() === occurence ? 97 : (65 - 26) // minus 26 first letters in lowercase

	total += occurence.charCodeAt(0) - sub + 1
}

console.log(total);