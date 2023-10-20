import { Button } from "./ui/button";
import { type CubeData } from "cuber";

export default function Sidebar(props: {
  cube: CubeData;
  performAlgOnCube: (alg: string) => void;
}) {
  const validAbsoluteMoves = [
    "R",
    "L",
    "F",
    "B",
    "U",
    "D",
    "M",
    "E",
    "S",
    "r",
    "l",
    "f",
    "b",
    "u",
    "d",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div
      className="flex flex-col 
    items-center justify-start gap-2"
    >
      {validAbsoluteMoves.map((move) => (
        <div
          key={move}
          className="flex items-center justify-between gap-2
      "
        >
          <Button
            onClick={() => props.performAlgOnCube(move)}
            className="h-12 w-24"
          >
            {move}
          </Button>
          <Button
            onClick={() => props.performAlgOnCube(move + "'")}
            className="h-12 w-24"
          >
            {move + "'"}
          </Button>
        </div>
      ))}
    </div>
  );
}
