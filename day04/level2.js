const fs = require('fs');

const sections = fs.readFileSync('./input.txt', 'utf8').split('\n');

const total = sections.reduce((acc, section) => {
	const [num1, num2, num3, num4] = section.replaceAll('-', ',').split(',').map(num => parseInt(num));

	if ((num2 >= num3) && (num4 >= num1)) {
		return ++acc;
	}

	return acc;
}, 0);

console.log(total);