const fs = require('fs');

// Define source and destination paths
const paths = [
  { src: './contracts/IERC5725.sol', dest: './IERC5725.sol' },
  { src: './artifacts/contracts/IERC5725.sol/IERC5725.json', dest: './IERC5725.json' },
];

// Copy each file
paths.forEach(({ src, dest }) => {
  fs.copyFileSync(src, dest);
});