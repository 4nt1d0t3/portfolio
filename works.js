const worksCard = document.querySelector('#works-card');
const ul = document.querySelector('ul');
const sideNavs = document.querySelectorAll('.side-nav');

worksCard.addEventListener('click', () => {
	location.href = 'https://sheltered-river-68577.herokuapp.com/';
});

ul.addEventListener('mouseover', () => {
	sideNavs.forEach((nav) => {
		nav.style.display = 'block';
	});
	ul.classList.add('ul-hover')
});
ul.addEventListener('mouseout', () => {
	sideNavs.forEach((nav) => {
		nav.style.display = 'none';
	});
	ul.classList.remove('ul-hover')
});
