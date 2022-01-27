
// BUSINESS LOGIC

function Player() {
	this.roll = 0;
	this.tempScore = 0;
	this.totalScore = 0;
}

let rollDice = function () {
	return Math.floor((Math.random() * 6) + 1);
};

Player.prototype.rollPoints = function () {
	if (this.roll === 1) {
		this.tempScore = 0;
		alert('You rolled a 1 and now your score is 0');
	} else {
		this.tempScore = this.roll + this.tempScore;
	}
};

Player.prototype.hold = function () {
	this.totalScore += this.tempScore;
	this.tempScore = 0;
};

Player.prototype.winner = function () {
	if (this.totalScore >= 100) {
		alert ('Player 1 wins!');
	} //else { this.totalScore += this.tempScore;
	//}
};
let player1 = new Player();
let player2 = new Player();


// UI LOGIC

// Player 1
$(document).ready(function () {
	$('button#rollP1').click(function (event) {
		event.preventDefault();
		player1.roll = rollDice();
		player1.rollPoints();
		$(".roll1").html(player1.roll);
		$(".turnTotal1").html(player1.tempScore);
		// $('#p1').append("<li>" + player1.roll + "</li>")
		console.log(player1.roll);
	});
	
	$("button#holdP1").click(function (event) {
		event.preventDefault();
		player1.hold();
		player1.winner();
		$(".turnTotal1").html("0");
		$(".roll1").html("0");
		$(".grandTotal1").html(player1.totalScore);
	})

// Player 2
	$('button#rollP2').click(function (event) {
		event.preventDefault();
		player2.roll = rollDice();
		player2.rollPoints();
		$(".roll2").html(player2.roll);
		$(".turnTotal2").html(player2.tempScore);
		console.log(player2.roll);
	});
	
	$("button#holdP2").click(function (event) {
		event.preventDefault();
		player2.hold();
		player2.winner();
		$(".turnTotal2").html("0");
		$(".roll2").html("0");
		$(".grandTotal2").html(player2.totalScore);
	})
});