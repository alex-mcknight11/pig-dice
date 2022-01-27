// BUSINESS LOGIC

function Player() {
	this.roll = 0;
	this.tempScore = 0;
	this.totalScore = 0;
}

let rollDice = function () {
	return Math.floor(Math.random() * 6) + 1;
};

Player.prototype.rollPoints = function () {
	if (this.roll === 1) {
		this.tempScore = 0;
		alert('You rolled a 1 and now your score is 0');
	} else {
		this.tempScore = this.tempScore + this.roll;
	}
};

Player.prototype.hold = function () {
	this.totalScore += this.tempScore;
	this.tempScore = 0;
};

// Player.prototype.singleRoll = function () {
// 	this.roll = rollDice();
// 	this.rollPoints();
// };


let player1 = new Player();
let player2 = new Player();

$(document).ready(function () {
	$('button#rollP1').click(function (event) {
		event.preventDefault();
		player1.roll = rollDice();
		$('#resultsPlayer1').text(rollDice());
		player1.rollPoints();
	});
	console.log(player1.roll);
});
// UI LOGIC

//$("#rollDisplay").text(player1.tempScore);
