setTimeout(function() {
	document.getElementById('fromTheTop').style.top = '6vh';
}, 300);

const worksIcon = document.querySelector('#works-i');
const deetsIcon = document.querySelector('#deets-i');
const header = document.querySelector('header');
const worksBtn = document.querySelector('#works');
const deetsBtn = document.querySelector('#deets');
const ul = document.querySelector('ul');
const sideNavs = document.querySelectorAll('.side-nav');

worksBtn.addEventListener('click', () => {
	setTimeout(() => {
		location.href = 'works.html';
	}, 1100);
	header.style.top = '-1000px';
	worksIcon.classList.add('rocket-works');
});
deetsBtn.addEventListener('click', () => {
	setTimeout(() => {
		location.href = 'deets.html';
	}, 1100);
	deetsIcon.classList.add('rocket-deets');
});


ul.addEventListener('mouseover', () => {
	sideNavs.forEach((nav) => {
		nav.style.display = 'block';
	});
	ul.classList.add('ul-hover')
	header.style.marginLeft = '50px'
});
ul.addEventListener('mouseout', () => {
	sideNavs.forEach((nav) => {
		nav.style.display = 'none';
	});
	ul.classList.remove('ul-hover')
	header.style.marginLeft = '0'
});

