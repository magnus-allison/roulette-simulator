class BoardItem {
	constructor(value, color) {
		this.value = value;
		this.color = color;
		this.DOMNode = null;
	}

	render() {
		const item = document.createElement('div');
		item.classList.add('number__item');
		item.style.backgroundColor = this.color;
		item.innerHTML = this.value;

		this.DOMNode = item;
		return item;
	}

	select(selected) {
		if (!this.DOMNode) throw new Error('Item not rendered');
		this.DOMNode.style.backgroundColor = selected ? '#CFF70F' : this.color;
		this.DOMNode.style.color = selected ? '#000' : '#FFF';
	}
}

export default BoardItem;
