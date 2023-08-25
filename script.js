window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for (let index = 0; index < 5; index++) {
	window.promises.push(new Promise((resolve) => {
		setTimeout(() => {
			document.querySelector("div").textContent = "Something";
			resolve(true)
		}, Math.floor(Math.random() * 5))
	}))
}