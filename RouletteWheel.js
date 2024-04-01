class RouletteWheel {
	#width = 220;
	#height = 220;
	#x;
	#y;

	constructor(x, y, ctx) {
		this.#x = x;
		this.#y = y;
		this.rotation = 0;
		this.ctx = ctx;
		this.endRotation = 0;
		this.image = new Image();
		this.image.src = './wheel.webp';
		this.image.onload = () => {
			this.randomRotation();
			this.rotate(this.endRotation);
			this.draw();
		};
	}

	draw() {
		this.ctx.fillStyle = 'red';
		this.ctx.save();
		this.ctx.translate(this.#x, this.#y);
		this.ctx.rotate((this.rotation * Math.PI) / 180);
		this.ctx.drawImage(this.image, 0 - this.#width / 2, 0 - this.#height / 2, this.#width, this.#height);
		this.ctx.restore();
	}

	randomRotation() {
		this.endRotation = Math.floor(Math.random() * 360);
	}

	rotate(degrees) {
		this.rotation = degrees;
	}
}

export default RouletteWheel;
