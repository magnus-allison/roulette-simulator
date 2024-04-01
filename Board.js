import BoardItem from './BoardItem.js';

class Board {
	constructor(el) {
		this.DOMNode = document.querySelector(el);
		this.guessedNumbers = [];
	}

	render() {
		this.DOMNode.innerHTML = '';
		for (let i = 1; i <= 36; ++i) {
			let color;
			if ((i >= 1 && i <= 10) || (i >= 19 && i <= 28)) {
				color = i % 2 === 0 ? '#070606' : '#D30606'; // Even numbers black, odd numbers red
			} else {
				color = i % 2 === 0 ? '#D30606' : '#070606'; // Even numbers red, odd numbers black
			}

			const item = new BoardItem(i, color);
			this.DOMNode.appendChild(item.render());

			item.DOMNode.addEventListener('click', () => {
				if (this.guessedNumbers.includes(i)) {
					this.guessedNumbers = this.guessedNumbers.filter((number) => number !== i);
					item.select(false);
					return;
				}
				this.guessedNumbers.push(i);
				item.select(true);
			});
		}
	}
}

export default Board;
