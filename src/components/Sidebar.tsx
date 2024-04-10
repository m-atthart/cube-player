import { useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { type CubeData } from "cuber";

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

export default function Sidebar(props: {
  cube: CubeData;
  performAlgOnCube: (alg: string) => void;
}) {
  const [chosenAlgSet, setChosenAlgSet] = useState<string>("");

  const tempAlgs: Record<string, { name: string; alg: string }[]> = {
    oll: [
      { name: "Sune", alg: "R U R' U R U2 R'" },
      { name: "Anti-Sune", alg: "R U2 R' U' R U' R'" },
    ],
    pll: [
      { name: "T", alg: "R U R' U' R' F R2 U' R' U' R U R' F'" },
      { name: "J", alg: "R U R' F' R U R' U' R' F R2 U' R' U'" },
      { name: "Y", alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'" },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <Accordion type="multiple">
        <AccordionItem value="individual-moves">
          <AccordionTrigger>Individual Moves</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="saved-algs">
          <AccordionTrigger>Saved Algs</AccordionTrigger>
          <AccordionContent>
            <Select onValueChange={(val) => setChosenAlgSet(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Alg Set" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="oll">OLL</SelectItem>
                <SelectItem value="pll">PLL</SelectItem>
              </SelectContent>
            </Select>
            {tempAlgs[chosenAlgSet]?.map((alg) => (
              <div
                key={alg.name}
                className="flex items-center justify-between gap-2"
              >
                <Button
                  onClick={() => props.performAlgOnCube(alg.alg)}
                  className="h-12 w-24"
                >
                  {alg.name}
                </Button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
