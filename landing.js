// Select elements
const closeBtn = document.querySelector('.closeX');
const hambuger = document.querySelector('.menubars');
const mainMenu = document.querySelector('.menu');
const info = document.querySelector('.headerInfo');
const menus = document.querySelectorAll('.dropDown');
const dropContent = document.querySelectorAll('.dropDownContent');
const angledown = document.querySelectorAll('.angledown');

displayDrop();
displayMenu();
hideMenu();

// Display mobile menu
function displayMenu() {
	hambuger.addEventListener('click', () => {
		hambuger.style.visibility = 'hidden';
		closeBtn.style.visibility = 'visible';
		closeBtn.style.marginRight = '2.3rem';
		mainMenu.style.visibility = 'visible';
		info.style.visibility = 'hidden';
	});
}

// Hide mobile menu
function hideMenu() {
	closeBtn.addEventListener('click', () => {
		closeBtn.style.visibility = 'hidden';
		closeBtn.style.marginRight = '-3rem';
		hambuger.style.visibility = 'visible';
		mainMenu.style.visibility = 'hidden';
		info.style.visibility = 'visible';
	});
}

// display drop menu
function displayDrop() {
	menus.forEach((menu) => {
		menu.addEventListener('click', () => {
			const nxtSibling = menu.parentElement.nextElementSibling.firstElementChild;
			// console.log(nxtSibling);
			let arrow = nxtSibling.parentElement.previousElementSibling.lastElementChild;

			// transform arrow up and down
			angledown.forEach((angle) => {
				if (angle !== arrow) {
					if (angle.style.transform === 'rotate(180deg)') {
						angle.style.transform = null;
					}
				}
				if (angle === arrow) {
					angle.style.transform === 'rotate(180deg)'
						? (angle.style.transform = null)
						: (angle.style.transform = 'rotate(180deg)');
				}
			});

			// check for a match
			dropContent.forEach((drop) => {
				// if dropdown menu doesn't match the current dropdown
				if (drop !== nxtSibling) {
					if (drop.style.visibility === 'visible') {
						drop.style.visibility = 'hidden';
					}
				}

				// if it matches
				if (drop === nxtSibling) {
					nxtSibling.style.visibility === 'visible'
						? (drop.style.visibility = 'hidden')
						: (drop.style.visibility = 'visible');
					console.log(drop);
				}
			});
		});
	});
}

// Hide any dropdown if is clicked outside
window.addEventListener('click', (e) => {
	menus.forEach((menu) => {
		let nxtSibling;
		let arrow;
		if (menu !== null) {
			nxtSibling = menu.parentElement.nextElementSibling.firstElementChild;
		}

		if (typeof nxtSibling !== 'undefined') {
			arrow = nxtSibling.parentElement.previousElementSibling.lastElementChild;
		}
		if (e.target !== menu) {
			if (nxtSibling.style.visibility !== null) {
				nxtSibling.style.visibility = 'hidden';
			}
			if (arrow.style.transform !== null) {
				arrow.style.transform = null;
			}
		}
	});
});
