const muteBtn = document.querySelector('.mute-btn');
const footerYear = document.querySelector('.footer-year');
const audio = document.querySelector('.audio');
const preloader = document.querySelector('.preloader');

const main = () => {
	handleCurrentYear();
	handleDOMEvents();
};

const handleDOMEvents = () => {
	window.addEventListener('load', function () {
		preloader.classList.add('loaded');
	});
};

const handleMuteBtn = () => {
	audio.classList.toggle('muted');

	if (audio.hasAttribute('muted')) {
		audio.removeAttribute('muted', '');
	} else {
		audio.setAttribute('muted', '');
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

window.addEventListener('DOMContentLoaded', main);
