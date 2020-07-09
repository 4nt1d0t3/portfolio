const flipContainer = document.querySelector('.flip-container');
const ul = document.querySelector('ul');
const sideNavs = document.querySelectorAll('.side-nav');
const linkedIn = document.querySelector('#linkedin-link');
const email = document.querySelector('#email');

email.addEventListener('mouseover', () => {
	email.style.visibility = 'visible'
})

flipContainer.addEventListener('click', () => {
	document.querySelector('.flipper').classList.toggle('hover');
	document.querySelector('.back').classList.toggle('background');
});

ul.addEventListener('mouseover', () => {
	sideNavs.forEach((nav) => {
		nav.style.display = 'block';
	});
	ul.classList.add('ul-hover');
});
ul.addEventListener('mouseout', () => {
	sideNavs.forEach((nav) => {
		nav.style.display = 'none';
	});
	ul.classList.remove('ul-hover');
});

linkedIn.addEventListener('click', () => {
	location.href = 'https://www.linkedin.com/in/antti-hyppola-11b159169/';
});
