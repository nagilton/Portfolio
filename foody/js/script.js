"use strict"

const doc = document.documentElement;
// const burger = document.querySelector('.menu__burger');
// console.log('burger');
document.addEventListener('click', addClass);
function addClass(e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu__burger')) {
		doc.classList.toggle('some-class');
		// Відміна дії за замовченням
		e.preventDefault();
	} else if (!targetElement.closest('.menu__burger')) {
		doc.classList.remove('some-class');
	}
}


const bodyElement = document.body;
if (bodyElement.closest('.active')) {
	// console.log('da');
	const bur = document.querySelector('.menu__burger');
	// bur.remove();

	const headCont = document.querySelector('.header__container');
	headCont.insertAdjacentElement("beforeend",bur);
} else {
	console.log('no');

}