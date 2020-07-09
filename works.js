const cardImage = document.querySelector('.card-image');
const cardText = document.querySelector('.card-text');
const navbar = document.querySelector('#navbar');
const sideNavs = document.querySelectorAll('.side-nav');


navbar.addEventListener('mouseover', () => {
	console.log('hover')
	sideNavs.forEach((nav) => {
		nav.classList.add('appear');
	});
	navbar.classList.add('ul-hover')
});
navbar.addEventListener('mouseout', () => {
	sideNavs.forEach((nav) => {
		nav.classList.remove('appear');
	});
	navbar.classList.remove('ul-hover')
});

cardText.addEventListener('mouseover', () => {
	cardText.classList.add('glow')
	cardImage.classList.add('glow')
})
cardImage.addEventListener('mouseover', () => {
	cardText.classList.add('glow')
	cardImage.classList.add('glow')
})
cardText.addEventListener('mouseout', () => {
	cardText.classList.remove('glow')
	cardImage.classList.remove('glow')
})
cardImage.addEventListener('mouseout', () => {
	cardText.classList.remove('glow')
	cardImage.classList.remove('glow')
})



