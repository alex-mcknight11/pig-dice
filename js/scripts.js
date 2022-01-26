// BUSINESS LOGIC

function Player(turn) {
	this.roll = 0;
	this.temporaryScore = 0;
	this.totalscore = 0;
	this.turn = turn;
}

let rollDice = function () {
	return Math.floor(Math.random() * 6) + 1;
};
console.log(rollDice(5));
