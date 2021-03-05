export default function Utilities() {
	const track = document.querySelector('.track');
	let initialPosition = null;
	let moving = false;
	let transform = 0;

	const gestureStart = e => {
		initialPosition = e.pageX;
		moving = true;
		const transformMatrix = window
			.getComputedStyle(track)
			.getPropertyValue('transform');
		if (transformMatrix !== 'none') {
			transform = parseInt(transformMatrix.split(',')[4].trim());
			console.log(transform);
		}
	};
	const gestureMove = e => {
		if (moving) {
			const currentPosition = e.pageX;
			const diff = currentPosition - initialPosition;
			track.style.transform = `translateX(${transform + diff}px)`;
		}
	};

	const gestureEnd = e => {
		moving = false;
	};

	window.addEventListener('touchdown', gestureStart);

	window.addEventListener('touchmove', gestureMove);

	window.addEventListener('touchup', gestureEnd);
	window.addEventListener('mousedown', gestureStart);

	window.addEventListener('mousemove', gestureMove);

	window.addEventListener('mousemove', gestureEnd);
}
