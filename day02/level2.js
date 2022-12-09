const fs = require('fs');

const points = {
	'X': 1,
	'Y': 2,
	'Z': 3,
}

const strategy = {
	'X': 0,
	'Y': 3,
	'Z': 6,
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
	const [ player1, ldw ] = game.split(' ');
	const play = Object.keys(draft[player1]).filter(key => draft[player1][key] === strategy[ldw])[0];

	return acc += points[play] + draft[player1][play];
}, 0);

console.log(total);