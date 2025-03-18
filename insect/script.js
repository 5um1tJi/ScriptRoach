const cockroach = document.getElementById('cockroach');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth movement function
function moveCockroach() {
  const cockroachRect = cockroach.getBoundingClientRect();
  const cockroachX = cockroachRect.left + cockroachRect.width / 2;
  const cockroachY = cockroachRect.top + cockroachRect.height / 2;

  // Calculate the angle between the cockroach and the mouse
  const angle = Math.atan2(mouseY - cockroachY, mouseX - cockroachX);

  // Move the cockroach towards the mouse
  const speed = 3; // Adjust speed as needed
  const newX = cockroachX + Math.cos(angle) * speed;
  const newY = cockroachY + Math.sin(angle) * speed;

  // Update the cockroach position
  cockroach.style.left = `${newX - cockroachRect.width / 2}px`;
  cockroach.style.top = `${newY - cockroachRect.height / 2}px`;

  // Rotate the cockroach to face the mouse
  cockroach.style.transform = `rotate(${angle}rad)`;

  // Request the next animation frame
  requestAnimationFrame(moveCockroach);
}

// Start the movement
moveCockroach();
