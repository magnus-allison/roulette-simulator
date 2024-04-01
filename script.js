import BoardItem from './BoardItem.js';
import App from './App.js';

const app = new App();
app.init();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		for (let i = 0; i < 1; i++) {
			setTimeout(() => {
				app.spin();
			}, i * 1000);
		}
	});
});
