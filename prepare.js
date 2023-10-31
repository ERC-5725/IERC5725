const fs = require('fs');

// Define source and destination paths
const paths = [
  // Bringing to root for cleaner imports
  { src: './contracts/IERC5725.sol', dest: './IERC5725.sol' },
];

console.log("Preparing for publish...");
// Copy each file
paths.forEach(({ src, dest }) => {
  fs.copyFileSync(src, dest);
});

console.log("Preparing DONE!");