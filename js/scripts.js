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
// console.log(rollDice());

Player.prototype.rollPoints = function () {
	if (this.roll === 1) {
		this.tempScore = 0;
		alert('You rolled a 1 and now your score is 0');
	} else {
		this.tempScore = this.tempScore + this.roll;
	}
};

Player.prototype.singleRoll = function () {
	this.roll = rollDice();
	this.rollPoints();
};

Player.prototype.hold = function () {
	this.totalscore += this.tempScore;
	this.tempScore = 0;
};

//if (Player.rolls === 1) {
//temporaryScore = 0;
//}

let player1 = new Player();

$(document).ready(function () {
	$('button#roll').click(function (event) {
		event.preventDefault();
		player1.roll = rollDice();
		$('#rollDisplay').text(rollDice());
		player1.singleRoll();
		return Player.this.tempScore();
	});
});
// UI LOGIC

//$("#rollDisplay").text(player1.tempScore);
