// let range = new Range();

// range.setStart(p, 0);
// range.setEnd(p, 2);

// console.log(range);

// document.getSelection().addRange(range);


let button = document.querySelector('#button');
button.addEventListener('click', handler);

function handler() {
	let range = new Range();

	range.setStart(p, start.value);
	range.setEnd(p, end.value);

	document.getSelection().removeAllRanges();
	document.getSelection().addRange(range);
}

let range = new Range();

range.setStart(p.firstChild, 2);
range.setEnd(p.querySelector('b').childNodes[0], 6);

alert(range);

document.getSelection().addRange(range);

let fragm = range.cloneContents();
document.body.append(fragm);

let methods = {
	deleteContents() {
		range.deleteContents();
	},

	extractContents() {
		let content = range.extractContents();
		result.innerHTML = '';
		result.append('Извлечено: ', content);
	},

	cloneContents() {
		let content = range.cloneContents();
		result.innerHTML = '';
		result.append('Клонированно: ', content);
	},

	insertNode() {
		let newNode = document.createElement('u');
		newNode.innerHTML = 'НОВЫЙ УЗЕЛ';
		range.insertNode(newNode);
	},

	surroundContents() {
		let newNode = document.createElement('u');
		try {
			range.surroundContents(newNode);
		} catch (e) {
			alert(e);
		}
	},

	resetExample() {
		p.innerHTML = `Example: <i>italic</i> and <b>bold</b>`;
		result.innerHTML = '';

		range.setStart(p.firstChild, 2);
		range.setEnd(p.querySelector('b').firstChild, 3);

		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
	}
};

for (let method in methods) {
	document.write(`<div><button onclick="methods.${method}()">${method}</button></div>`);
}

methods.resetExample();

document.addEventListener('selectionchange', showSelectRange);

function showSelectRange() {
	let { anchorNode, anchorOffset, focusNode, focusOffset } =
		document.getSelection();
	fromSel.value = `${anchorNode && anchorNode.data} : ${anchorOffset}`;
	toSel.value = `${focusNode && focusNode.data} : ${focusOffset}`;
}

document.addEventListener('selectionchange', showSelect);

function showSelect() {
	let selection = document.getSelection();

	clone.innerHTML = astext.innerHTML = '';

	for (let i = 0; i < selection.rangeCount; i++) {
		clone.append(selection.getRangeAt(i).cloneContents());
	}

	astext.innerHTML += selection.toString();
}


//! Методы Selection

// document.getSelection().setBaseAndExtent(p, 0, p, p.childNodes.length);

// ! Выделение в элементах форм

let area = document.querySelector('#area');
area.addEventListener('select', function () {
	fromArea.value = area.selectionStart;
	toArea.value = area.selectionEnd;
})


// ! Изменение позиции курсора

area.addEventListener('focus', function () {
	setTimeout(() => {
		area.selectionStart = area.selectionEnd = 10;
	});
})

let intSel = document.querySelector('#intSel');
let wrapBut = document.querySelector('#wrapBut');
wrapBut.addEventListener('click', function () {
	if (intSel.selectionStart == intSel.selectionEnd) {
		return;
	}

	let selected = intSel.value.slice(intSel.selectionStart, intSel.selectionEnd);
	intSel.setRangeText(`*${selected}*`);
})


let replaceInp = document.querySelector('.replaceInp');
let replaceBut = document.querySelector('.replaceBut');

replaceBut.addEventListener('click', function () {
	let pos = replaceInp.value.indexOf('ЭТО');

	if (pos >= 0) {
		replaceInp.setRangeText('*ЭТО*', pos, pos + 3, 'select');
		replaceInp.focus();
	}
});


let insertInp = document.querySelector('.insertInp');
let insertBut = document.querySelector('.insertBut');

insertBut.addEventListener('click', function () {
	insertInp.setRangeText('ПРИВЕТ', insertInp.selectionStart, insertInp.selectionEnd, 'end');
	insertInp.focus();
});