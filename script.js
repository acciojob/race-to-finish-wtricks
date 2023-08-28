window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Between 1000ms and 5000ms
}

const promises = Array.from({ length: 5 }, () =>
	{
		let t =  getRandomTime();
		new Promise((resolve) => setTimeout(resolve, t,t))
	}
);

window.promises.push(...promises)

Promise.any(promises)
  .then((result) => {
    // Print the result to the output div.
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `First resolved result: ${result}`;
  })
  .catch((error) => {
    console.error("All promises failed:", error);
  });