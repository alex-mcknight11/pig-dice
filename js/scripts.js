// BUSINESS LOGIC

function Player(turn) {
	this.roll = 0;
	this.tempScore = 0;
	this.totalscore = 0;
	this.turn = turn;
	this.playerName;
}

let rollDice = function () {
	return Math.floor(Math.random() * 6) + 1;
};
console.log(rollDice(5));
this.roll = rollDice(5);

Player.prototype.rollsOne = function () {
	if (this.roll === 1) {
		this.tempScore = 0;
		alert('You rolled a 1 and now your score is 0');
	} else {
		this.tempscore += this.roll;
	}
};

//if (Player.rolls === 1) {
//temporaryScore = 0;
//}
