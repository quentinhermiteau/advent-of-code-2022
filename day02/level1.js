const fs = require('fs');

const points = {
	'X': 1,
	'Y': 2,
	'Z': 3,
}

const draft = {
	'A': {
		'X': 3,
		'Y': 6,
		'Z': 0,
	},
	'B': {
		'X': 0,
		'Y': 3,
		'Z': 6,
	},
	'C': {
		'X': 6,
		'Y': 0,
		'Z': 3,
	},
}

const games = fs.readFileSync('./input.txt', 'utf8').split('\n');

const total = games.reduce((acc, game) => {
	const [ player1, player2 ] = game.split(' ');
	return acc += points[player2] + draft[player1][player2];
}, 0)

console.log(total);