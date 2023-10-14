import { useEffect, useState } from "react";
import { useThree, type ThreeElements } from "@react-three/fiber";
import {
  getStickerColour,
  type CubeData,
  type CubeColour,
  type ValidStickerLetter,
} from "cuber";
import { DoubleSide } from "three";

export default function Cube(
  props: ThreeElements["mesh"] & { cube: CubeData }
) {
  const { camera } = useThree();
  camera.lookAt(0, 0, 0);

  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial color={"purple"} />
      </mesh>

      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="A"
        position={[-1, 1.51, -1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="B"
        position={[1, 1.51, -1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="C"
        position={[1, 1.51, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="D"
        position={[-1, 1.51, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="A"
        position={[0, 1.51, -1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="B"
        position={[1, 1.51, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="C"
        position={[0, 1.51, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="D"
        position={[-1, 1.51, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="center"
        letter="U"
        position={[0, 1.51, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="E"
        position={[-1.51, 1, -1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="F"
        position={[-1.51, 1, 1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="G"
        position={[-1.51, -1, 1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="H"
        position={[-1.51, -1, -1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="E"
        position={[-1.51, 1, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="F"
        position={[-1.51, 0, 1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="G"
        position={[-1.51, -1, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="H"
        position={[-1.51, 0, -1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="center"
        letter="L"
        position={[-1.51, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="I"
        position={[-1, 1, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="J"
        position={[1, 1, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="K"
        position={[1, -1, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="L"
        position={[-1, -1, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="I"
        position={[0, 1, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="J"
        position={[1, 0, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="K"
        position={[0, -1, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="L"
        position={[-1, 0, 1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="center"
        letter="F"
        position={[0, 0, 1.51]}
      />

      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="M"
        position={[1.51, 1, 1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="N"
        position={[1.51, 1, -1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="O"
        position={[1.51, -1, -1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="P"
        position={[1.51, -1, 1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="M"
        position={[1.51, 1, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="N"
        position={[1.51, 0, -1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="O"
        position={[1.51, -1, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="P"
        position={[1.51, 0, 1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="center"
        letter="R"
        position={[1.51, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="Q"
        position={[1, 1, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="R"
        position={[-1, 1, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="S"
        position={[-1, -1, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="T"
        position={[1, -1, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="Q"
        position={[0, 1, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="R"
        position={[-1, 0, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="S"
        position={[0, -1, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="T"
        position={[1, 0, -1.51]}
      />
      <Sticker
        cube={props.cube}
        pieceType="center"
        letter="B"
        position={[0, 0, -1.51]}
      />

      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="U"
        position={[-1, -1.51, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="V"
        position={[1, -1.51, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="W"
        position={[1, -1.51, -1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="corner"
        letter="X"
        position={[-1, -1.51, -1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="U"
        position={[0, -1.51, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="V"
        position={[1, -1.51, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="W"
        position={[0, -1.51, -1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="edge"
        letter="X"
        position={[-1, -1.51, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Sticker
        cube={props.cube}
        pieceType="center"
        letter="D"
        position={[0, -1.51, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </>
  );
}

function Sticker(
  props: ThreeElements["mesh"] & {
    cube: CubeData;
    pieceType: "corner" | "edge" | "center";
    letter: ValidStickerLetter;
  }
) {
  const [colour, setColour] = useState<CubeColour>(
    getStickerColour(props.cube, props.pieceType, props.letter)
  );
  useEffect(() => {
    setColour(getStickerColour(props.cube, props.pieceType, props.letter));
  }, [props.cube, props.pieceType, props.letter]);
  return (
    <mesh {...props}>
      <planeGeometry args={[0.95, 0.95]} />
      <meshBasicMaterial color={colour} side={DoubleSide} />
    </mesh>
  );
}
