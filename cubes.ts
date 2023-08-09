import { getSolvedCube, printCube, performAlg } from "cuber";

const cube = getSolvedCube();
// printCube(cube);
// performAlg(cube, "R U R' U' R' F R2 U' R' U' R U R' F'");
const scrambleCount = performAlg(
  cube,
  "B2 L2 D2 F R2 B D2 B' R2 F L2 F2 R F' U L B' F R U2"
);
const solveCount = performAlg(
  cube,
  "Z2 U L U' L F' R' D' F L' U L U R U R' U L U L' U L U' L' D2 R' U R D2 Y' R U' R' U' R U R' f R U R' U' f' U F R U R' U' F' U2 R U R' U' R' F R2 U' R' U' R U R' F'"
);
printCube(cube);
console.log(`Scramble count: ${scrambleCount}`);
console.log(`Solve count: ${solveCount}`);
