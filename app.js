let square = document.querySelectorAll('.square');
let mole = document.querySelectorAll('.mole');
let timeLeft = document.querySelectorAll('#time-left');
let score = document.querySelectorAll('#score');

let result = 0;
let currentTime = timeLeft[0].textContent;
let hitPosition;
console.log(currentTime);

function randomSquare() {
	square.forEach((className) => {
		className.classList.remove('mole');
	});
	let randomPosition = square[Math.floor(Math.random() * 9)];
	randomPosition.classList.add('mole');

	//assign the id of the randomPosition to hitPosition
	hitPosition = randomPosition.id;
}

square.forEach((id) => {
	id.addEventListener('mouseup', () => {
		if (id.id === hitPosition) {
			result += 1;
			score[0].textContent = result;
		}
	});
});

function moveMole() {
	let timerId = null;
	timerId = setInterval(randomSquare, 500);
}

function countDown() {
	currentTime--;
	timeLeft[0].textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerId);
		alert('GAME OVER! Your final score is ' + result + ' Press okay to play again');
		setInterval(() => {
			location.reload();
		}, 10);
	}
}

let timerId = setInterval(countDown, 1000);

moveMole();
