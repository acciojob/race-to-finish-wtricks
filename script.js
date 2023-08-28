window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Between 1000ms and 5000ms
}

for(let i =0; i<5;i++) {
	window.promises.push(Math.floor(Math.random() * 5))
}

// const promises = Array.from({ length: 5 }, () =>
// 	{
// 		let t =  getRandomTime();
// 		new Promise((resolve) => setTimeout(resolve, t,t))
// 	}
// );

// window.promises.push(...promises)

// Promise.any(promises)
//   .then((result) => {
//     // Print the result to the output div.
//     const outputDiv = document.getElementById("output");
//     outputDiv.textContent = `First resolved result: ${result}`;
//   })
//   .catch((error) => {
//     console.error("All promises failed:", error);
//   });




// const promises = window.promises.map(delay => { return new Promise(resolve => { setTimeout(() => { resolve(delay); }, delay * 1000); }); }); Promise.any(promises).then(result => { res = result; }); })