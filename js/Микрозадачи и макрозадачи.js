// let i = 0;
// let start = Date.now();

// function count() {
// 	for (let j = 0; j < 1e9; j++) {
// 		i++;
// 	}

// 	alert('Done in ' + (Date.now() - start) + 'ms');
// }

// count();


// ! Разбитие на части

// function count() {
// 	do {
// 		i++;
// 	} while (i % 1e6 != 0);

// 	if (i == 1e9) {
// 		alert('Done in ' + (Date.now() - start) + 'ms');
// 	} else {
// 		setTimeout(count);
// 	}
// }


// function count() {
// 	if (i < 1e9 - 1e6) {
// 		setTimeout(count);
// 	}

// 	do {
// 		i++;
// 	} while (i % 1e6 != 0);

// 	if (i == 1e9) {
// 		alert('Done in ' + (Date.now() - start) + 'ms');
// 	}
// }


// ! Индикация процесса

let progress = document.querySelector('.progress');

// function count() {
// 	for (let i = 0; i < 1e6; i++) {
// 		i++;
// 		progress.innerHTML = i;
// 	}
// }

// count();


let i = 0;

function count() {
	do {
		i++;
		progress.innerHTML = i;
	} while (i % 1e3 != 0);

	if (i < 1e6) {
		setTimeout(() => {
			count();
		});
	}
}

count();