class HistoryList {
	constructor(el) {
		this.DOMNode = document.querySelector(el);
		this.history = [];
	}

	push(history) {
		this.history.push(history);
		this.render();
	}

	get() {
		return this.history;
	}

	render() {
		this.DOMNode.innerHTML = '';
		this.history.map((item) => {
			const li = document.createElement('p');
			li.innerHTML = `${item.winning} - ${item.guessed.join(', ')}`;
			this.DOMNode.appendChild(li);
		});
	}
}

export default HistoryList;
