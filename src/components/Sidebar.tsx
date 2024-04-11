import { useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { type CubeData } from "../lib/cuber";

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

const tempAlgs: Record<string, { name: string; alg: string }[]> = {
  OLL: [
    { name: "Sune", alg: "R U R' U R U2 R'" },
    { name: "Anti-Sune", alg: "R U2 R' U' R U' R'" },
  ],
  PLL: [
    { name: "T", alg: "R U R' U' R' F R2 U' R' U' R U R' F'" },
    { name: "J", alg: "R U R' F' R U R' U' R' F R2 U' R' U'" },
    { name: "Y", alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'" },
  ],
};

function createAlgSet(
  name: string,
  algs: { name: string; alg: string }[] = [],
) {
  tempAlgs[name] = algs;
  console.log(name, algs);
}

function addNewAlg(chosenAlgSet: string, name: string, alg: string) {
  tempAlgs[chosenAlgSet]?.push({ name, alg });
  console.log(name, alg);
}

export default function Sidebar(props: {
  cube: CubeData;
  performAlgOnCube: (alg: string, reversed?: boolean) => void;
}) {
  const [chosenAlgSet, setChosenAlgSet] = useState<string>("");
  const [newAlgSetName, setNewAlgSetName] = useState<string>("");
  const [newAlgName, setNewAlgName] = useState<string>("");
  const [newAlg, setNewAlg] = useState<string>("");

  return (
    <div className="flex max-h-screen min-h-screen w-56 min-w-fit flex-col items-center overflow-scroll">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="individual-moves" className="w-56 px-4">
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
                  onClick={() => props.performAlgOnCube(move, true)}
                  className="h-12 w-24"
                >
                  {move + "'"}
                </Button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="saved-algs" className="w-56 px-4">
          <AccordionTrigger>Saved Algs</AccordionTrigger>
          <AccordionContent>
            <Select
              value={chosenAlgSet}
              onValueChange={(val) => setChosenAlgSet(val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Alg Set" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(tempAlgs).map((algSetName) => (
                  <SelectItem value={algSetName} key={algSetName}>
                    {algSetName}
                  </SelectItem>
                ))}
                <SelectItem value="add-new" key="add-new">
                  +Add New
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="my-4 flex flex-col gap-4">
              {chosenAlgSet === "add-new" ? (
                <>
                  <Input
                    className="light px-4 py-2 text-black"
                    placeholder="Name"
                    value={newAlgSetName}
                    onChange={(e) => setNewAlgSetName(e.target.value)}
                  />

                  <Button
                    onClick={() => {
                      createAlgSet(newAlgSetName);
                      setNewAlgSetName("");
                    }}
                  >
                    Create
                  </Button>
                </>
              ) : (
                chosenAlgSet && (
                  <>
                    <div>
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
                          <Button
                            onClick={() =>
                              props.performAlgOnCube(alg.alg, true)
                            }
                            className="h-12 w-24"
                          >
                            {alg.name + "'"}
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Input
                        className="light px-4 py-2 text-black"
                        placeholder="Name"
                        value={newAlgName}
                        onChange={(e) => setNewAlgName(e.target.value)}
                      />
                      <Input
                        className="light px-4 py-2 text-black"
                        placeholder="Alg"
                        value={newAlg}
                        onChange={(e) => setNewAlg(e.target.value)}
                      />

                      <Button
                        onClick={() => {
                          addNewAlg(chosenAlgSet, newAlgName, newAlg);
                          setNewAlgName("");
                          setNewAlg("");
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </>
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
