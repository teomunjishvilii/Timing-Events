// //////////////////////////////////////////////// setTimeout ////////////////////////////////////////////////

// setTimeout(() => {
//   alert("This message is displayed after 5 seconds");
// }, 5000);

// //////////////////////////////////////////////// setInterval ////////////////////////////////////////////////

// let count = 0;
// const intervalId = setInterval(() => {
//   count += 1;
//   alert(`This message is displayed every 5 seconds. Count: ${count}`);
//   if (count === 5) {
//     clearInterval(intervalId); // Stop the interval after it has run 5 times
//     alert("The interval has already run 5 times :)");
//   }
// }, 5000);

////////////////////////////////////////////// requestAnimationFrame ////////////////////////////////////////////////

const box = document.getElementById("box");
let position = 0;

function animate() {
  position += 2; // Move the box 2 pixels to the right
  box.style.left = position + "px";

  if (position < window.innerWidth) {
    // Continue animation until the box reaches the edge of the screen
    requestAnimationFrame(animate);
  }
}

// Start the animation
requestAnimationFrame(animate);
