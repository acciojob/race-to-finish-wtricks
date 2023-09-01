window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const outputDiv = document.getElementById('output');

const getRandomTime = () => Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds

window.promises = [
    new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve("Promise 4 resolved"), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve("Promise 5 resolved"), getRandomTime()))
];

Promise.any(promises)
    .then(result => {
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error('All promises rejected:', error);
    });
