let square = document.querySelectorAll('.square');
let mole = document.querySelectorAll('.mole');
let timeLeft = document.querySelectorAll('#time-left');
let score = document.querySelectorAll('#score');

let result = 0;
let currentTime = timeLeft.textContent;
// let hitPosition = '';

const randomSquare = () => {
	square.forEach((className) => {
		className.classList.remove('mole');
	});
	let randomPosition = square[Math.floor(Math.random() * 9)];
	randomPosition.classList.add('mole');

	//assign the id of the randomPosition to hitPosition
	hitPosition = randomPosition.id;
};

square.forEach((id) => {
	id.addEventListener('mouseup', () => {
		if (id.id === hitPosition) {
			result += 1;
			score.textContent = result;
		}
	});
});

const moveMole = () => {
	let timerId = null;
	timerId = setInterval(randomSquare, 1000);
};

moveMole();

const countDown = () => {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerId);
		alert('GAME OVER! Your final score is ' + result);
	}
};

let timerId = setInterval(countDown, 1000);
