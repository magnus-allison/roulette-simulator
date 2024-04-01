import RouletteWheel from './RouletteWheel.js';
import Board from './Board.js';
import HistoryList from './HistoryList.js';
import Stats from './Stats.js';

class App {
	constructor() {
		this.canvas = document.getElementById('canvas');
		if (!this.canvas) throw new Error('Canvas element not found');
		this.ctx = this.canvas.getContext('2d');

		this.spinDuration = 150;
		this.elapsedTime = 0;

		this.RouletteWheel = new RouletteWheel(this.canvas.width / 2, this.canvas.height / 2, this.ctx);
		this.Board = new Board('#board__numbers');
		this.HistoryList = new HistoryList('#history-list');
		this.Stats = new Stats();
	}

	init() {
		this.Board.render();
	}

	animate() {
		if (this.elapsedTime >= this.spinDuration) {
			this.calculateResult();
			this.elapsedTime = 0;
			return;
		}
		this.elapsedTime += 1;
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.RouletteWheel.draw();

		const time = this.elapsedTime / this.spinDuration;
		const easedT = 1 - Math.pow(1 - time, 3);
		this.RouletteWheel.rotate(
			this.lerp(this.RouletteWheel.endRotation - 360, this.RouletteWheel.endRotation, easedT)
		);
		requestAnimationFrame(this.animate.bind(this));
	}

	calculateResult() {
		const winningNumber = this.randomInt(0, 36);

		this.HistoryList.push({
			winning: winningNumber,
			guessed: [...this.Board.guessedNumbers]
		});

		if (this.Board.guessedNumbers.includes(winningNumber)) {
			alert('You win!');
		}
		this.elapsedTime = 0;
		this.Board.unfreeze();
	}

	spin() {
		if (this.Board.guessedNumbers.length === 0) {
			// alert('Please select a number');
			return;
		}
		this.Board.freeze();
		this.RouletteWheel.randomRotation();
		this.animate();
	}

	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	lerp(start, end, time) {
		return start * (1 - time) + end * time;
	}
}

export default App;
