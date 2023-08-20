import Head from "next/head";
import { useEffect, useState } from "react";
import { Canvas, useThree, type ThreeElements } from "@react-three/fiber";
import {
  getSolvedCube,
  getStickerColour,
  performAlg,
  type Cube,
  type CubeColour,
  type ValidStickerLetter,
} from "cuber";
import { DoubleSide } from "three";

function Cube(props: ThreeElements["mesh"] & { cube: Cube }) {
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
    cube: Cube;
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

export default function Home() {
  const [cube, setCube] = useState<Cube>(getSolvedCube());
  const [inputAlg, setInputAlg] = useState<string>("");

  return (
    <>
      <Head>
        <title>Mosaicube</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="h-[600px] w-[600px]">
          <Canvas
            camera={{
              fov: 60,
              aspect: 1,
              near: 0.1,
              far: 1000,
              position: [3.5, 3.5, 5.5],
            }}
          >
            <Cube cube={cube} position={[0, 0, 0]} />
          </Canvas>
        </div>
        <div className="flex items-center justify-center gap-4">
          <input
            className="rounded-md bg-white px-4 py-2"
            value={inputAlg}
            onChange={(e) => setInputAlg(e.target.value)}
          />
          <button
            className="rounded-md bg-white px-4 py-2"
            onClick={() => setCube({ ...performAlg(cube, inputAlg) })}
          >
            turn
          </button>
        </div>
      </main>
    </>
  );
}
