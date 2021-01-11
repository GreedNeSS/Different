let obs = new MutationObserver(mutationRecords => {
	console.log(mutationRecords)
});

obs.observe(elem, {
	childList: true,
	subtree: true,
	characterDataOldValue: true
});

document.querySelectorAll('pre[class*="language"]')
	.forEach(elem => { elem.style.fontSize = '20px' });
