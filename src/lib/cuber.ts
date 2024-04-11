export type CubeColour =
  | "white"
  | "yellow"
  | "green"
  | "blue"
  | "red"
  | "orange";

export type CubeData = {
  corners: {
    UBL: {
      U: { colour: CubeColour; letter: "A"; sticker: null };
      B: { colour: CubeColour; letter: "R"; sticker: null };
      L: { colour: CubeColour; letter: "E"; sticker: null };
    };
    UBR: {
      U: { colour: CubeColour; letter: "B"; sticker: null };
      B: { colour: CubeColour; letter: "Q"; sticker: null };
      R: { colour: CubeColour; letter: "N"; sticker: null };
    };
    UFR: {
      U: { colour: CubeColour; letter: "C"; sticker: null };
      F: { colour: CubeColour; letter: "J"; sticker: null };
      R: { colour: CubeColour; letter: "M"; sticker: null };
    };
    UFL: {
      U: { colour: CubeColour; letter: "D"; sticker: null };
      F: { colour: CubeColour; letter: "I"; sticker: null };
      L: { colour: CubeColour; letter: "F"; sticker: null };
    };
    DFL: {
      D: { colour: CubeColour; letter: "U"; sticker: null };
      F: { colour: CubeColour; letter: "L"; sticker: null };
      L: { colour: CubeColour; letter: "G"; sticker: null };
    };
    DFR: {
      D: { colour: CubeColour; letter: "V"; sticker: null };
      F: { colour: CubeColour; letter: "K"; sticker: null };
      R: { colour: CubeColour; letter: "P"; sticker: null };
    };
    DBR: {
      D: { colour: CubeColour; letter: "W"; sticker: null };
      B: { colour: CubeColour; letter: "T"; sticker: null };
      R: { colour: CubeColour; letter: "O"; sticker: null };
    };
    DBL: {
      D: { colour: CubeColour; letter: "X"; sticker: null };
      B: { colour: CubeColour; letter: "S"; sticker: null };
      L: { colour: CubeColour; letter: "H"; sticker: null };
    };
  };
  edges: {
    UB: {
      U: { colour: CubeColour; letter: "A"; sticker: null };
      B: { colour: CubeColour; letter: "Q"; sticker: null };
    };
    UR: {
      U: { colour: CubeColour; letter: "B"; sticker: null };
      R: { colour: CubeColour; letter: "M"; sticker: null };
    };
    UF: {
      U: { colour: CubeColour; letter: "C"; sticker: null };
      F: { colour: CubeColour; letter: "I"; sticker: null };
    };
    UL: {
      U: { colour: CubeColour; letter: "D"; sticker: null };
      L: { colour: CubeColour; letter: "E"; sticker: null };
    };
    FL: {
      F: { colour: CubeColour; letter: "L"; sticker: null };
      L: { colour: CubeColour; letter: "F"; sticker: null };
    };
    FR: {
      F: { colour: CubeColour; letter: "J"; sticker: null };
      R: { colour: CubeColour; letter: "P"; sticker: null };
    };
    BR: {
      B: { colour: CubeColour; letter: "T"; sticker: null };
      R: { colour: CubeColour; letter: "N"; sticker: null };
    };
    BL: {
      B: { colour: CubeColour; letter: "R"; sticker: null };
      L: { colour: CubeColour; letter: "H"; sticker: null };
    };
    DF: {
      D: { colour: CubeColour; letter: "U"; sticker: null };
      F: { colour: CubeColour; letter: "K"; sticker: null };
    };
    DR: {
      D: { colour: CubeColour; letter: "V"; sticker: null };
      R: { colour: CubeColour; letter: "O"; sticker: null };
    };
    DB: {
      D: { colour: CubeColour; letter: "W"; sticker: null };
      B: { colour: CubeColour; letter: "S"; sticker: null };
    };
    DL: {
      D: { colour: CubeColour; letter: "X"; sticker: null };
      L: { colour: CubeColour; letter: "G"; sticker: null };
    };
  };
  centers: {
    U: { colour: CubeColour; letter: "U"; sticker: null };
    D: { colour: CubeColour; letter: "D"; sticker: null };
    F: { colour: CubeColour; letter: "F"; sticker: null };
    B: { colour: CubeColour; letter: "B"; sticker: null };
    R: { colour: CubeColour; letter: "R"; sticker: null };
    L: { colour: CubeColour; letter: "L"; sticker: null };
  };
};

export type ValidStickerLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X";

export type LegalMove =
  | "R"
  | "R'"
  | "L"
  | "L'"
  | "U"
  | "U'"
  | "D"
  | "D'"
  | "F"
  | "F'"
  | "B"
  | "B'"
  | "M"
  | "M'"
  | "S"
  | "S'"
  | "E"
  | "E'"
  | "r"
  | "r'"
  | "l"
  | "l'"
  | "u"
  | "u'"
  | "d"
  | "d'"
  | "f"
  | "f'"
  | "b"
  | "b'"
  | "X"
  | "X'"
  | "Y"
  | "Y'"
  | "Z"
  | "Z'";

export function getSolvedCube() {
  const solvedCube: CubeData = {
    corners: {
      UBL: {
        U: { colour: "blue", letter: "A", sticker: null },
        B: { colour: "yellow", letter: "R", sticker: null },
        L: { colour: "orange", letter: "E", sticker: null },
      },
      UBR: {
        U: { colour: "blue", letter: "B", sticker: null },
        B: { colour: "yellow", letter: "Q", sticker: null },
        R: { colour: "red", letter: "N", sticker: null },
      },
      UFR: {
        U: { colour: "blue", letter: "C", sticker: null },
        F: { colour: "white", letter: "J", sticker: null },
        R: { colour: "red", letter: "M", sticker: null },
      },
      UFL: {
        U: { colour: "blue", letter: "D", sticker: null },
        F: { colour: "white", letter: "I", sticker: null },
        L: { colour: "orange", letter: "F", sticker: null },
      },
      DFL: {
        D: { colour: "green", letter: "U", sticker: null },
        F: { colour: "white", letter: "L", sticker: null },
        L: { colour: "orange", letter: "G", sticker: null },
      },
      DFR: {
        D: { colour: "green", letter: "V", sticker: null },
        F: { colour: "white", letter: "K", sticker: null },
        R: { colour: "red", letter: "P", sticker: null },
      },
      DBR: {
        D: { colour: "green", letter: "W", sticker: null },
        B: { colour: "yellow", letter: "T", sticker: null },
        R: { colour: "red", letter: "O", sticker: null },
      },
      DBL: {
        D: { colour: "green", letter: "X", sticker: null },
        B: { colour: "yellow", letter: "S", sticker: null },
        L: { colour: "orange", letter: "H", sticker: null },
      },
    },
    edges: {
      UB: {
        U: { colour: "blue", letter: "A", sticker: null },
        B: { colour: "yellow", letter: "Q", sticker: null },
      },
      UR: {
        U: { colour: "blue", letter: "B", sticker: null },
        R: { colour: "red", letter: "M", sticker: null },
      },
      UF: {
        U: { colour: "blue", letter: "C", sticker: null },
        F: { colour: "white", letter: "I", sticker: null },
      },
      UL: {
        U: { colour: "blue", letter: "D", sticker: null },
        L: { colour: "orange", letter: "E", sticker: null },
      },
      FL: {
        F: { colour: "white", letter: "L", sticker: null },
        L: { colour: "orange", letter: "F", sticker: null },
      },
      FR: {
        F: { colour: "white", letter: "J", sticker: null },
        R: { colour: "red", letter: "P", sticker: null },
      },
      BR: {
        B: { colour: "yellow", letter: "T", sticker: null },
        R: { colour: "red", letter: "N", sticker: null },
      },
      BL: {
        B: { colour: "yellow", letter: "R", sticker: null },
        L: { colour: "orange", letter: "H", sticker: null },
      },
      DF: {
        D: { colour: "green", letter: "U", sticker: null },
        F: { colour: "white", letter: "K", sticker: null },
      },
      DR: {
        D: { colour: "green", letter: "V", sticker: null },
        R: { colour: "red", letter: "O", sticker: null },
      },
      DB: {
        D: { colour: "green", letter: "W", sticker: null },
        B: { colour: "yellow", letter: "S", sticker: null },
      },
      DL: {
        D: { colour: "green", letter: "X", sticker: null },
        L: { colour: "orange", letter: "G", sticker: null },
      },
    },
    centers: {
      U: { colour: "blue", letter: "U", sticker: null },
      D: { colour: "green", letter: "D", sticker: null },
      F: { colour: "white", letter: "F", sticker: null },
      B: { colour: "yellow", letter: "B", sticker: null },
      R: { colour: "red", letter: "R", sticker: null },
      L: { colour: "orange", letter: "L", sticker: null },
    },
  };

  return solvedCube;
}

function reverseAlg(algorithm: string[]) {
  return algorithm.toReversed().map((move) => {
    if (move.endsWith("'")) {
      return move.slice(0, -1);
    }
    return move + "'";
  });
}

export function performAlg(
  cube: CubeData,
  algorithm: string,
  reversed = false,
) {
  const moves = reversed
    ? reverseAlg(algorithm.split(" "))
    : algorithm.split(" ");
  let validMoveCount = 0;

  for (const move of moves) {
    const lastChar = parseInt(move.slice(-1));
    if (!isNaN(lastChar)) {
      validMoveCount += turn(cube, move.slice(0, -1));
      for (let i = 1; i < lastChar; i++) turn(cube, move.slice(0, -1));
    } else {
      validMoveCount = validMoveCount + turn(cube, move);
    }
  }

  return cube;
}

export function turn(cube: CubeData, move: string) {
  switch (move) {
    case "R": {
      const tempCorner = {
        C: getStickerColour(cube, "corner", "C"),
        J: getStickerColour(cube, "corner", "J"),
        M: getStickerColour(cube, "corner", "M"),
      };
      const tempEdge = {
        B: getStickerColour(cube, "edge", "B"),
        M: getStickerColour(cube, "edge", "M"),
      };

      setStickerColour(
        cube,
        "corner",
        "C",
        getStickerColour(cube, "corner", "K"),
      );
      setStickerColour(
        cube,
        "corner",
        "J",
        getStickerColour(cube, "corner", "V"),
      );
      setStickerColour(
        cube,
        "corner",
        "M",
        getStickerColour(cube, "corner", "P"),
      );

      setStickerColour(
        cube,
        "corner",
        "V",
        getStickerColour(cube, "corner", "T"),
      );
      setStickerColour(
        cube,
        "corner",
        "K",
        getStickerColour(cube, "corner", "W"),
      );
      setStickerColour(
        cube,
        "corner",
        "P",
        getStickerColour(cube, "corner", "O"),
      );

      setStickerColour(
        cube,
        "corner",
        "W",
        getStickerColour(cube, "corner", "Q"),
      );
      setStickerColour(
        cube,
        "corner",
        "T",
        getStickerColour(cube, "corner", "B"),
      );
      setStickerColour(
        cube,
        "corner",
        "O",
        getStickerColour(cube, "corner", "N"),
      );

      setStickerColour(cube, "corner", "B", tempCorner.J);
      setStickerColour(cube, "corner", "Q", tempCorner.C);
      setStickerColour(cube, "corner", "N", tempCorner.M);

      setStickerColour(cube, "edge", "B", getStickerColour(cube, "edge", "J"));
      setStickerColour(cube, "edge", "M", getStickerColour(cube, "edge", "P"));

      setStickerColour(cube, "edge", "J", getStickerColour(cube, "edge", "V"));
      setStickerColour(cube, "edge", "P", getStickerColour(cube, "edge", "O"));

      setStickerColour(cube, "edge", "V", getStickerColour(cube, "edge", "T"));
      setStickerColour(cube, "edge", "O", getStickerColour(cube, "edge", "N"));

      setStickerColour(cube, "edge", "T", tempEdge.B);
      setStickerColour(cube, "edge", "N", tempEdge.M);

      break;
    }

    case "R'": {
      const tempCorner = {
        C: getStickerColour(cube, "corner", "C"),
        J: getStickerColour(cube, "corner", "J"),
        M: getStickerColour(cube, "corner", "M"),
      };
      const tempEdge = {
        B: getStickerColour(cube, "edge", "B"),
        M: getStickerColour(cube, "edge", "M"),
      };

      setStickerColour(
        cube,
        "corner",
        "C",
        getStickerColour(cube, "corner", "Q"),
      );
      setStickerColour(
        cube,
        "corner",
        "J",
        getStickerColour(cube, "corner", "B"),
      );
      setStickerColour(
        cube,
        "corner",
        "M",
        getStickerColour(cube, "corner", "N"),
      );

      setStickerColour(
        cube,
        "corner",
        "B",
        getStickerColour(cube, "corner", "T"),
      );
      setStickerColour(
        cube,
        "corner",
        "Q",
        getStickerColour(cube, "corner", "W"),
      );
      setStickerColour(
        cube,
        "corner",
        "N",
        getStickerColour(cube, "corner", "O"),
      );

      setStickerColour(
        cube,
        "corner",
        "W",
        getStickerColour(cube, "corner", "K"),
      );
      setStickerColour(
        cube,
        "corner",
        "T",
        getStickerColour(cube, "corner", "V"),
      );
      setStickerColour(
        cube,
        "corner",
        "O",
        getStickerColour(cube, "corner", "P"),
      );

      setStickerColour(cube, "corner", "V", tempCorner.J);
      setStickerColour(cube, "corner", "K", tempCorner.C);
      setStickerColour(cube, "corner", "P", tempCorner.M);

      setStickerColour(cube, "edge", "B", getStickerColour(cube, "edge", "T"));
      setStickerColour(cube, "edge", "M", getStickerColour(cube, "edge", "N"));

      setStickerColour(cube, "edge", "T", getStickerColour(cube, "edge", "V"));
      setStickerColour(cube, "edge", "N", getStickerColour(cube, "edge", "O"));

      setStickerColour(cube, "edge", "V", getStickerColour(cube, "edge", "J"));
      setStickerColour(cube, "edge", "O", getStickerColour(cube, "edge", "P"));

      setStickerColour(cube, "edge", "J", tempEdge.B);
      setStickerColour(cube, "edge", "P", tempEdge.M);

      break;
    }

    case "L": {
      const tempCorner = {
        D: getStickerColour(cube, "corner", "D"),
        I: getStickerColour(cube, "corner", "I"),
        F: getStickerColour(cube, "corner", "F"),
      };
      const tempEdge = {
        D: getStickerColour(cube, "edge", "D"),
        E: getStickerColour(cube, "edge", "E"),
      };

      setStickerColour(
        cube,
        "corner",
        "D",
        getStickerColour(cube, "corner", "R"),
      );
      setStickerColour(
        cube,
        "corner",
        "I",
        getStickerColour(cube, "corner", "A"),
      );
      setStickerColour(
        cube,
        "corner",
        "F",
        getStickerColour(cube, "corner", "E"),
      );

      setStickerColour(
        cube,
        "corner",
        "A",
        getStickerColour(cube, "corner", "S"),
      );
      setStickerColour(
        cube,
        "corner",
        "R",
        getStickerColour(cube, "corner", "X"),
      );
      setStickerColour(
        cube,
        "corner",
        "E",
        getStickerColour(cube, "corner", "H"),
      );

      setStickerColour(
        cube,
        "corner",
        "X",
        getStickerColour(cube, "corner", "L"),
      );
      setStickerColour(
        cube,
        "corner",
        "S",
        getStickerColour(cube, "corner", "U"),
      );
      setStickerColour(
        cube,
        "corner",
        "H",
        getStickerColour(cube, "corner", "G"),
      );

      setStickerColour(cube, "corner", "U", tempCorner.I);
      setStickerColour(cube, "corner", "L", tempCorner.D);
      setStickerColour(cube, "corner", "G", tempCorner.F);

      setStickerColour(cube, "edge", "D", getStickerColour(cube, "edge", "R"));
      setStickerColour(cube, "edge", "E", getStickerColour(cube, "edge", "H"));

      setStickerColour(cube, "edge", "R", getStickerColour(cube, "edge", "X"));
      setStickerColour(cube, "edge", "H", getStickerColour(cube, "edge", "G"));

      setStickerColour(cube, "edge", "X", getStickerColour(cube, "edge", "L"));
      setStickerColour(cube, "edge", "G", getStickerColour(cube, "edge", "F"));

      setStickerColour(cube, "edge", "L", tempEdge.D);
      setStickerColour(cube, "edge", "F", tempEdge.E);

      break;
    }

    case "L'": {
      const tempCorner = {
        D: getStickerColour(cube, "corner", "D"),
        I: getStickerColour(cube, "corner", "I"),
        F: getStickerColour(cube, "corner", "F"),
      };
      const tempEdge = {
        D: getStickerColour(cube, "edge", "D"),
        E: getStickerColour(cube, "edge", "E"),
      };

      setStickerColour(
        cube,
        "corner",
        "D",
        getStickerColour(cube, "corner", "L"),
      );
      setStickerColour(
        cube,
        "corner",
        "I",
        getStickerColour(cube, "corner", "U"),
      );
      setStickerColour(
        cube,
        "corner",
        "F",
        getStickerColour(cube, "corner", "G"),
      );

      setStickerColour(
        cube,
        "corner",
        "U",
        getStickerColour(cube, "corner", "S"),
      );
      setStickerColour(
        cube,
        "corner",
        "L",
        getStickerColour(cube, "corner", "X"),
      );
      setStickerColour(
        cube,
        "corner",
        "G",
        getStickerColour(cube, "corner", "H"),
      );

      setStickerColour(
        cube,
        "corner",
        "X",
        getStickerColour(cube, "corner", "R"),
      );
      setStickerColour(
        cube,
        "corner",
        "S",
        getStickerColour(cube, "corner", "A"),
      );
      setStickerColour(
        cube,
        "corner",
        "H",
        getStickerColour(cube, "corner", "E"),
      );

      setStickerColour(cube, "corner", "A", tempCorner.I);
      setStickerColour(cube, "corner", "R", tempCorner.D);
      setStickerColour(cube, "corner", "E", tempCorner.F);

      setStickerColour(cube, "edge", "D", getStickerColour(cube, "edge", "L"));
      setStickerColour(cube, "edge", "E", getStickerColour(cube, "edge", "F"));

      setStickerColour(cube, "edge", "L", getStickerColour(cube, "edge", "X"));
      setStickerColour(cube, "edge", "F", getStickerColour(cube, "edge", "G"));

      setStickerColour(cube, "edge", "X", getStickerColour(cube, "edge", "R"));
      setStickerColour(cube, "edge", "G", getStickerColour(cube, "edge", "H"));

      setStickerColour(cube, "edge", "R", tempEdge.D);
      setStickerColour(cube, "edge", "H", tempEdge.E);

      break;
    }

    case "U": {
      const tempCorner = {
        C: getStickerColour(cube, "corner", "C"),
        J: getStickerColour(cube, "corner", "J"),
        M: getStickerColour(cube, "corner", "M"),
      };
      const tempEdge = {
        C: getStickerColour(cube, "edge", "C"),
        I: getStickerColour(cube, "edge", "I"),
      };

      setStickerColour(
        cube,
        "corner",
        "C",
        getStickerColour(cube, "corner", "B"),
      );
      setStickerColour(
        cube,
        "corner",
        "J",
        getStickerColour(cube, "corner", "N"),
      );
      setStickerColour(
        cube,
        "corner",
        "M",
        getStickerColour(cube, "corner", "Q"),
      );

      setStickerColour(
        cube,
        "corner",
        "B",
        getStickerColour(cube, "corner", "A"),
      );
      setStickerColour(
        cube,
        "corner",
        "Q",
        getStickerColour(cube, "corner", "E"),
      );
      setStickerColour(
        cube,
        "corner",
        "N",
        getStickerColour(cube, "corner", "R"),
      );

      setStickerColour(
        cube,
        "corner",
        "A",
        getStickerColour(cube, "corner", "D"),
      );
      setStickerColour(
        cube,
        "corner",
        "R",
        getStickerColour(cube, "corner", "F"),
      );
      setStickerColour(
        cube,
        "corner",
        "E",
        getStickerColour(cube, "corner", "I"),
      );

      setStickerColour(cube, "corner", "D", tempCorner.C);
      setStickerColour(cube, "corner", "I", tempCorner.M);
      setStickerColour(cube, "corner", "F", tempCorner.J);

      setStickerColour(cube, "edge", "C", getStickerColour(cube, "edge", "B"));
      setStickerColour(cube, "edge", "I", getStickerColour(cube, "edge", "M"));

      setStickerColour(cube, "edge", "B", getStickerColour(cube, "edge", "A"));
      setStickerColour(cube, "edge", "M", getStickerColour(cube, "edge", "Q"));

      setStickerColour(cube, "edge", "A", getStickerColour(cube, "edge", "D"));
      setStickerColour(cube, "edge", "Q", getStickerColour(cube, "edge", "E"));

      setStickerColour(cube, "edge", "D", tempEdge.C);
      setStickerColour(cube, "edge", "E", tempEdge.I);

      break;
    }

    case "U'": {
      const tempCorner = {
        D: getStickerColour(cube, "corner", "D"),
        I: getStickerColour(cube, "corner", "I"),
        F: getStickerColour(cube, "corner", "F"),
      };
      const tempEdge = {
        C: getStickerColour(cube, "edge", "C"),
        I: getStickerColour(cube, "edge", "I"),
      };

      setStickerColour(
        cube,
        "corner",
        "D",
        getStickerColour(cube, "corner", "A"),
      );
      setStickerColour(
        cube,
        "corner",
        "I",
        getStickerColour(cube, "corner", "E"),
      );
      setStickerColour(
        cube,
        "corner",
        "F",
        getStickerColour(cube, "corner", "R"),
      );

      setStickerColour(
        cube,
        "corner",
        "A",
        getStickerColour(cube, "corner", "B"),
      );
      setStickerColour(
        cube,
        "corner",
        "R",
        getStickerColour(cube, "corner", "N"),
      );
      setStickerColour(
        cube,
        "corner",
        "E",
        getStickerColour(cube, "corner", "Q"),
      );

      setStickerColour(
        cube,
        "corner",
        "B",
        getStickerColour(cube, "corner", "C"),
      );
      setStickerColour(
        cube,
        "corner",
        "N",
        getStickerColour(cube, "corner", "J"),
      );
      setStickerColour(
        cube,
        "corner",
        "Q",
        getStickerColour(cube, "corner", "M"),
      );

      setStickerColour(cube, "corner", "C", tempCorner.D);
      setStickerColour(cube, "corner", "J", tempCorner.F);
      setStickerColour(cube, "corner", "M", tempCorner.I);

      setStickerColour(cube, "edge", "C", getStickerColour(cube, "edge", "D"));
      setStickerColour(cube, "edge", "I", getStickerColour(cube, "edge", "E"));

      setStickerColour(cube, "edge", "D", getStickerColour(cube, "edge", "A"));
      setStickerColour(cube, "edge", "E", getStickerColour(cube, "edge", "Q"));

      setStickerColour(cube, "edge", "A", getStickerColour(cube, "edge", "B"));
      setStickerColour(cube, "edge", "Q", getStickerColour(cube, "edge", "M"));

      setStickerColour(cube, "edge", "B", tempEdge.C);
      setStickerColour(cube, "edge", "M", tempEdge.I);

      break;
    }

    case "D": {
      const tempCorner = {
        V: getStickerColour(cube, "corner", "V"),
        K: getStickerColour(cube, "corner", "K"),
        P: getStickerColour(cube, "corner", "P"),
      };
      const tempEdge = {
        U: getStickerColour(cube, "edge", "U"),
        K: getStickerColour(cube, "edge", "K"),
      };

      setStickerColour(
        cube,
        "corner",
        "V",
        getStickerColour(cube, "corner", "U"),
      );
      setStickerColour(
        cube,
        "corner",
        "K",
        getStickerColour(cube, "corner", "G"),
      );
      setStickerColour(
        cube,
        "corner",
        "P",
        getStickerColour(cube, "corner", "L"),
      );

      setStickerColour(
        cube,
        "corner",
        "U",
        getStickerColour(cube, "corner", "X"),
      );
      setStickerColour(
        cube,
        "corner",
        "L",
        getStickerColour(cube, "corner", "H"),
      );
      setStickerColour(
        cube,
        "corner",
        "G",
        getStickerColour(cube, "corner", "S"),
      );

      setStickerColour(
        cube,
        "corner",
        "X",
        getStickerColour(cube, "corner", "W"),
      );
      setStickerColour(
        cube,
        "corner",
        "S",
        getStickerColour(cube, "corner", "O"),
      );
      setStickerColour(
        cube,
        "corner",
        "H",
        getStickerColour(cube, "corner", "T"),
      );

      setStickerColour(cube, "corner", "W", tempCorner.V);
      setStickerColour(cube, "corner", "T", tempCorner.P);
      setStickerColour(cube, "corner", "O", tempCorner.K);

      setStickerColour(cube, "edge", "U", getStickerColour(cube, "edge", "X"));
      setStickerColour(cube, "edge", "K", getStickerColour(cube, "edge", "G"));

      setStickerColour(cube, "edge", "X", getStickerColour(cube, "edge", "W"));
      setStickerColour(cube, "edge", "G", getStickerColour(cube, "edge", "S"));

      setStickerColour(cube, "edge", "W", getStickerColour(cube, "edge", "V"));
      setStickerColour(cube, "edge", "S", getStickerColour(cube, "edge", "O"));

      setStickerColour(cube, "edge", "V", tempEdge.U);
      setStickerColour(cube, "edge", "O", tempEdge.K);

      break;
    }

    case "D'": {
      const tempCorner = {
        V: getStickerColour(cube, "corner", "V"),
        K: getStickerColour(cube, "corner", "K"),
        P: getStickerColour(cube, "corner", "P"),
      };
      const tempEdge = {
        U: getStickerColour(cube, "edge", "U"),
        K: getStickerColour(cube, "edge", "K"),
      };

      setStickerColour(
        cube,
        "corner",
        "V",
        getStickerColour(cube, "corner", "W"),
      );
      setStickerColour(
        cube,
        "corner",
        "K",
        getStickerColour(cube, "corner", "O"),
      );
      setStickerColour(
        cube,
        "corner",
        "P",
        getStickerColour(cube, "corner", "T"),
      );

      setStickerColour(
        cube,
        "corner",
        "W",
        getStickerColour(cube, "corner", "X"),
      );
      setStickerColour(
        cube,
        "corner",
        "T",
        getStickerColour(cube, "corner", "H"),
      );
      setStickerColour(
        cube,
        "corner",
        "O",
        getStickerColour(cube, "corner", "S"),
      );

      setStickerColour(
        cube,
        "corner",
        "X",
        getStickerColour(cube, "corner", "U"),
      );
      setStickerColour(
        cube,
        "corner",
        "S",
        getStickerColour(cube, "corner", "G"),
      );
      setStickerColour(
        cube,
        "corner",
        "H",
        getStickerColour(cube, "corner", "L"),
      );

      setStickerColour(cube, "corner", "U", tempCorner.V);
      setStickerColour(cube, "corner", "L", tempCorner.P);
      setStickerColour(cube, "corner", "G", tempCorner.K);

      setStickerColour(cube, "edge", "U", getStickerColour(cube, "edge", "V"));
      setStickerColour(cube, "edge", "K", getStickerColour(cube, "edge", "O"));

      setStickerColour(cube, "edge", "V", getStickerColour(cube, "edge", "W"));
      setStickerColour(cube, "edge", "O", getStickerColour(cube, "edge", "S"));

      setStickerColour(cube, "edge", "W", getStickerColour(cube, "edge", "X"));
      setStickerColour(cube, "edge", "S", getStickerColour(cube, "edge", "G"));

      setStickerColour(cube, "edge", "X", tempEdge.U);
      setStickerColour(cube, "edge", "G", tempEdge.K);

      break;
    }

    case "F": {
      const tempCorner = {
        C: getStickerColour(cube, "corner", "C"),
        J: getStickerColour(cube, "corner", "J"),
        M: getStickerColour(cube, "corner", "M"),
      };
      const tempEdge = {
        C: getStickerColour(cube, "edge", "C"),
        I: getStickerColour(cube, "edge", "I"),
      };

      setStickerColour(
        cube,
        "corner",
        "C",
        getStickerColour(cube, "corner", "F"),
      );
      setStickerColour(
        cube,
        "corner",
        "J",
        getStickerColour(cube, "corner", "I"),
      );
      setStickerColour(
        cube,
        "corner",
        "M",
        getStickerColour(cube, "corner", "D"),
      );

      setStickerColour(
        cube,
        "corner",
        "D",
        getStickerColour(cube, "corner", "G"),
      );
      setStickerColour(
        cube,
        "corner",
        "I",
        getStickerColour(cube, "corner", "L"),
      );
      setStickerColour(
        cube,
        "corner",
        "F",
        getStickerColour(cube, "corner", "U"),
      );

      setStickerColour(
        cube,
        "corner",
        "U",
        getStickerColour(cube, "corner", "P"),
      );
      setStickerColour(
        cube,
        "corner",
        "L",
        getStickerColour(cube, "corner", "K"),
      );
      setStickerColour(
        cube,
        "corner",
        "G",
        getStickerColour(cube, "corner", "V"),
      );

      setStickerColour(cube, "corner", "V", tempCorner.M);
      setStickerColour(cube, "corner", "K", tempCorner.J);
      setStickerColour(cube, "corner", "P", tempCorner.C);

      setStickerColour(cube, "edge", "C", getStickerColour(cube, "edge", "F"));
      setStickerColour(cube, "edge", "I", getStickerColour(cube, "edge", "L"));

      setStickerColour(cube, "edge", "L", getStickerColour(cube, "edge", "K"));
      setStickerColour(cube, "edge", "F", getStickerColour(cube, "edge", "U"));

      setStickerColour(cube, "edge", "U", getStickerColour(cube, "edge", "P"));
      setStickerColour(cube, "edge", "K", getStickerColour(cube, "edge", "J"));

      setStickerColour(cube, "edge", "J", tempEdge.I);
      setStickerColour(cube, "edge", "P", tempEdge.C);

      break;
    }

    case "F'": {
      const tempCorner = {
        C: getStickerColour(cube, "corner", "C"),
        J: getStickerColour(cube, "corner", "J"),
        M: getStickerColour(cube, "corner", "M"),
      };
      const tempEdge = {
        C: getStickerColour(cube, "edge", "C"),
        I: getStickerColour(cube, "edge", "I"),
      };

      setStickerColour(
        cube,
        "corner",
        "C",
        getStickerColour(cube, "corner", "P"),
      );
      setStickerColour(
        cube,
        "corner",
        "J",
        getStickerColour(cube, "corner", "K"),
      );
      setStickerColour(
        cube,
        "corner",
        "M",
        getStickerColour(cube, "corner", "V"),
      );

      setStickerColour(
        cube,
        "corner",
        "V",
        getStickerColour(cube, "corner", "G"),
      );
      setStickerColour(
        cube,
        "corner",
        "K",
        getStickerColour(cube, "corner", "L"),
      );
      setStickerColour(
        cube,
        "corner",
        "P",
        getStickerColour(cube, "corner", "U"),
      );

      setStickerColour(
        cube,
        "corner",
        "U",
        getStickerColour(cube, "corner", "F"),
      );
      setStickerColour(
        cube,
        "corner",
        "L",
        getStickerColour(cube, "corner", "I"),
      );
      setStickerColour(
        cube,
        "corner",
        "G",
        getStickerColour(cube, "corner", "D"),
      );

      setStickerColour(cube, "corner", "D", tempCorner.M);
      setStickerColour(cube, "corner", "I", tempCorner.J);
      setStickerColour(cube, "corner", "F", tempCorner.C);

      setStickerColour(cube, "edge", "C", getStickerColour(cube, "edge", "P"));
      setStickerColour(cube, "edge", "I", getStickerColour(cube, "edge", "J"));

      setStickerColour(cube, "edge", "J", getStickerColour(cube, "edge", "K"));
      setStickerColour(cube, "edge", "P", getStickerColour(cube, "edge", "U"));

      setStickerColour(cube, "edge", "U", getStickerColour(cube, "edge", "F"));
      setStickerColour(cube, "edge", "K", getStickerColour(cube, "edge", "L"));

      setStickerColour(cube, "edge", "L", tempEdge.I);
      setStickerColour(cube, "edge", "F", tempEdge.C);

      break;
    }

    case "B": {
      const tempCorner = {
        B: getStickerColour(cube, "corner", "B"),
        Q: getStickerColour(cube, "corner", "Q"),
        N: getStickerColour(cube, "corner", "N"),
      };
      const tempEdge = {
        A: getStickerColour(cube, "edge", "A"),
        Q: getStickerColour(cube, "edge", "Q"),
      };

      setStickerColour(
        cube,
        "corner",
        "B",
        getStickerColour(cube, "corner", "O"),
      );
      setStickerColour(
        cube,
        "corner",
        "Q",
        getStickerColour(cube, "corner", "T"),
      );
      setStickerColour(
        cube,
        "corner",
        "N",
        getStickerColour(cube, "corner", "W"),
      );

      setStickerColour(
        cube,
        "corner",
        "W",
        getStickerColour(cube, "corner", "H"),
      );
      setStickerColour(
        cube,
        "corner",
        "T",
        getStickerColour(cube, "corner", "S"),
      );
      setStickerColour(
        cube,
        "corner",
        "O",
        getStickerColour(cube, "corner", "X"),
      );

      setStickerColour(
        cube,
        "corner",
        "X",
        getStickerColour(cube, "corner", "E"),
      );
      setStickerColour(
        cube,
        "corner",
        "S",
        getStickerColour(cube, "corner", "R"),
      );
      setStickerColour(
        cube,
        "corner",
        "H",
        getStickerColour(cube, "corner", "A"),
      );

      setStickerColour(cube, "corner", "A", tempCorner.N);
      setStickerColour(cube, "corner", "R", tempCorner.Q);
      setStickerColour(cube, "corner", "E", tempCorner.B);

      setStickerColour(cube, "edge", "A", getStickerColour(cube, "edge", "N"));
      setStickerColour(cube, "edge", "Q", getStickerColour(cube, "edge", "T"));

      setStickerColour(cube, "edge", "T", getStickerColour(cube, "edge", "S"));
      setStickerColour(cube, "edge", "N", getStickerColour(cube, "edge", "W"));

      setStickerColour(cube, "edge", "W", getStickerColour(cube, "edge", "H"));
      setStickerColour(cube, "edge", "S", getStickerColour(cube, "edge", "R"));

      setStickerColour(cube, "edge", "R", tempEdge.Q);
      setStickerColour(cube, "edge", "H", tempEdge.A);

      break;
    }

    case "B'": {
      const tempCorner = {
        B: getStickerColour(cube, "corner", "B"),
        Q: getStickerColour(cube, "corner", "Q"),
        N: getStickerColour(cube, "corner", "N"),
      };
      const tempEdge = {
        A: getStickerColour(cube, "edge", "A"),
        Q: getStickerColour(cube, "edge", "Q"),
      };

      setStickerColour(
        cube,
        "corner",
        "B",
        getStickerColour(cube, "corner", "E"),
      );
      setStickerColour(
        cube,
        "corner",
        "Q",
        getStickerColour(cube, "corner", "R"),
      );
      setStickerColour(
        cube,
        "corner",
        "N",
        getStickerColour(cube, "corner", "A"),
      );

      setStickerColour(
        cube,
        "corner",
        "A",
        getStickerColour(cube, "corner", "H"),
      );
      setStickerColour(
        cube,
        "corner",
        "R",
        getStickerColour(cube, "corner", "S"),
      );
      setStickerColour(
        cube,
        "corner",
        "E",
        getStickerColour(cube, "corner", "X"),
      );

      setStickerColour(
        cube,
        "corner",
        "X",
        getStickerColour(cube, "corner", "O"),
      );
      setStickerColour(
        cube,
        "corner",
        "S",
        getStickerColour(cube, "corner", "T"),
      );
      setStickerColour(
        cube,
        "corner",
        "H",
        getStickerColour(cube, "corner", "W"),
      );

      setStickerColour(cube, "corner", "W", tempCorner.N);
      setStickerColour(cube, "corner", "T", tempCorner.Q);
      setStickerColour(cube, "corner", "O", tempCorner.B);

      setStickerColour(cube, "edge", "A", getStickerColour(cube, "edge", "H"));
      setStickerColour(cube, "edge", "Q", getStickerColour(cube, "edge", "R"));

      setStickerColour(cube, "edge", "R", getStickerColour(cube, "edge", "S"));
      setStickerColour(cube, "edge", "H", getStickerColour(cube, "edge", "W"));

      setStickerColour(cube, "edge", "W", getStickerColour(cube, "edge", "N"));
      setStickerColour(cube, "edge", "S", getStickerColour(cube, "edge", "T"));

      setStickerColour(cube, "edge", "T", tempEdge.Q);
      setStickerColour(cube, "edge", "N", tempEdge.A);

      break;
    }

    // M follows L
    case "M": {
      const tempEdge = {
        C: getStickerColour(cube, "edge", "C"),
        I: getStickerColour(cube, "edge", "I"),
      };
      const tempCenter = getStickerColour(cube, "center", "U");

      setStickerColour(cube, "edge", "C", getStickerColour(cube, "edge", "Q"));
      setStickerColour(cube, "edge", "I", getStickerColour(cube, "edge", "A"));

      setStickerColour(cube, "edge", "A", getStickerColour(cube, "edge", "S"));
      setStickerColour(cube, "edge", "Q", getStickerColour(cube, "edge", "W"));

      setStickerColour(cube, "edge", "W", getStickerColour(cube, "edge", "K"));
      setStickerColour(cube, "edge", "S", getStickerColour(cube, "edge", "U"));

      setStickerColour(cube, "edge", "U", tempEdge.I);
      setStickerColour(cube, "edge", "K", tempEdge.C);

      setStickerColour(
        cube,
        "center",
        "U",
        getStickerColour(cube, "center", "B"),
      );
      setStickerColour(
        cube,
        "center",
        "B",
        getStickerColour(cube, "center", "D"),
      );
      setStickerColour(
        cube,
        "center",
        "D",
        getStickerColour(cube, "center", "F"),
      );
      setStickerColour(cube, "center", "F", tempCenter);

      break;
    }

    case "M'": {
      const tempEdge = {
        C: getStickerColour(cube, "edge", "C"),
        I: getStickerColour(cube, "edge", "I"),
      };
      const tempCenter = getStickerColour(cube, "center", "U");

      setStickerColour(cube, "edge", "C", getStickerColour(cube, "edge", "K"));
      setStickerColour(cube, "edge", "I", getStickerColour(cube, "edge", "U"));

      setStickerColour(cube, "edge", "U", getStickerColour(cube, "edge", "S"));
      setStickerColour(cube, "edge", "K", getStickerColour(cube, "edge", "W"));

      setStickerColour(cube, "edge", "W", getStickerColour(cube, "edge", "Q"));
      setStickerColour(cube, "edge", "S", getStickerColour(cube, "edge", "A"));

      setStickerColour(cube, "edge", "A", tempEdge.I);
      setStickerColour(cube, "edge", "Q", tempEdge.C);

      setStickerColour(
        cube,
        "center",
        "U",
        getStickerColour(cube, "center", "F"),
      );
      setStickerColour(
        cube,
        "center",
        "F",
        getStickerColour(cube, "center", "D"),
      );
      setStickerColour(
        cube,
        "center",
        "D",
        getStickerColour(cube, "center", "B"),
      );
      setStickerColour(cube, "center", "B", tempCenter);

      break;
    }

    // S follows F
    case "S": {
      const tempEdge = {
        B: getStickerColour(cube, "edge", "B"),
        M: getStickerColour(cube, "edge", "M"),
      };
      const tempCenter = getStickerColour(cube, "center", "U");

      setStickerColour(cube, "edge", "B", getStickerColour(cube, "edge", "E"));
      setStickerColour(cube, "edge", "M", getStickerColour(cube, "edge", "D"));

      setStickerColour(cube, "edge", "D", getStickerColour(cube, "edge", "G"));
      setStickerColour(cube, "edge", "E", getStickerColour(cube, "edge", "X"));

      setStickerColour(cube, "edge", "X", getStickerColour(cube, "edge", "O"));
      setStickerColour(cube, "edge", "G", getStickerColour(cube, "edge", "V"));

      setStickerColour(cube, "edge", "V", tempEdge.M);
      setStickerColour(cube, "edge", "O", tempEdge.B);

      setStickerColour(
        cube,
        "center",
        "U",
        getStickerColour(cube, "center", "L"),
      );
      setStickerColour(
        cube,
        "center",
        "L",
        getStickerColour(cube, "center", "D"),
      );
      setStickerColour(
        cube,
        "center",
        "D",
        getStickerColour(cube, "center", "R"),
      );
      setStickerColour(cube, "center", "R", tempCenter);

      break;
    }

    case "S'": {
      const tempEdge = {
        B: getStickerColour(cube, "edge", "B"),
        M: getStickerColour(cube, "edge", "M"),
      };
      const tempCenter = getStickerColour(cube, "center", "U");

      setStickerColour(cube, "edge", "B", getStickerColour(cube, "edge", "O"));
      setStickerColour(cube, "edge", "M", getStickerColour(cube, "edge", "V"));

      setStickerColour(cube, "edge", "V", getStickerColour(cube, "edge", "G"));
      setStickerColour(cube, "edge", "O", getStickerColour(cube, "edge", "X"));

      setStickerColour(cube, "edge", "X", getStickerColour(cube, "edge", "E"));
      setStickerColour(cube, "edge", "G", getStickerColour(cube, "edge", "D"));

      setStickerColour(cube, "edge", "D", tempEdge.M);
      setStickerColour(cube, "edge", "E", tempEdge.B);

      setStickerColour(
        cube,
        "center",
        "U",
        getStickerColour(cube, "center", "R"),
      );
      setStickerColour(
        cube,
        "center",
        "R",
        getStickerColour(cube, "center", "D"),
      );
      setStickerColour(
        cube,
        "center",
        "D",
        getStickerColour(cube, "center", "L"),
      );
      setStickerColour(cube, "center", "L", tempCenter);

      break;
    }

    // E follows D
    case "E": {
      const tempEdge = {
        J: getStickerColour(cube, "edge", "J"),
        P: getStickerColour(cube, "edge", "P"),
      };
      const tempCenter = getStickerColour(cube, "center", "F");

      setStickerColour(cube, "edge", "J", getStickerColour(cube, "edge", "F"));
      setStickerColour(cube, "edge", "P", getStickerColour(cube, "edge", "L"));

      setStickerColour(cube, "edge", "L", getStickerColour(cube, "edge", "H"));
      setStickerColour(cube, "edge", "F", getStickerColour(cube, "edge", "R"));

      setStickerColour(cube, "edge", "R", getStickerColour(cube, "edge", "N"));
      setStickerColour(cube, "edge", "H", getStickerColour(cube, "edge", "T"));

      setStickerColour(cube, "edge", "T", tempEdge.P);
      setStickerColour(cube, "edge", "N", tempEdge.J);

      setStickerColour(
        cube,
        "center",
        "F",
        getStickerColour(cube, "center", "L"),
      );
      setStickerColour(
        cube,
        "center",
        "L",
        getStickerColour(cube, "center", "B"),
      );
      setStickerColour(
        cube,
        "center",
        "B",
        getStickerColour(cube, "center", "R"),
      );
      setStickerColour(cube, "center", "R", tempCenter);

      break;
    }

    case "E'": {
      const tempEdge = {
        J: getStickerColour(cube, "edge", "J"),
        P: getStickerColour(cube, "edge", "P"),
      };
      const tempCenter = getStickerColour(cube, "center", "F");

      setStickerColour(cube, "edge", "J", getStickerColour(cube, "edge", "N"));
      setStickerColour(cube, "edge", "P", getStickerColour(cube, "edge", "T"));

      setStickerColour(cube, "edge", "T", getStickerColour(cube, "edge", "H"));
      setStickerColour(cube, "edge", "N", getStickerColour(cube, "edge", "R"));

      setStickerColour(cube, "edge", "R", getStickerColour(cube, "edge", "F"));
      setStickerColour(cube, "edge", "H", getStickerColour(cube, "edge", "L"));

      setStickerColour(cube, "edge", "L", tempEdge.P);
      setStickerColour(cube, "edge", "F", tempEdge.J);

      setStickerColour(
        cube,
        "center",
        "F",
        getStickerColour(cube, "center", "R"),
      );
      setStickerColour(
        cube,
        "center",
        "R",
        getStickerColour(cube, "center", "B"),
      );
      setStickerColour(
        cube,
        "center",
        "B",
        getStickerColour(cube, "center", "L"),
      );
      setStickerColour(cube, "center", "L", tempCenter);

      break;
    }

    case "r":
      turn(cube, "R");
      turn(cube, "M'");

      break;

    case "r'":
      turn(cube, "R'");
      turn(cube, "M");

      break;

    case "l":
      turn(cube, "L");
      turn(cube, "M");

      break;

    case "l'":
      turn(cube, "L'");
      turn(cube, "M'");

      break;

    case "u":
      turn(cube, "U");
      turn(cube, "E'");

      break;

    case "u'":
      turn(cube, "U'");
      turn(cube, "E");

      break;

    case "d":
      turn(cube, "D");
      turn(cube, "E");

      break;

    case "d'":
      turn(cube, "D'");
      turn(cube, "E'");

      break;

    case "f":
      turn(cube, "F");
      turn(cube, "S");

      break;

    case "f'":
      turn(cube, "F'");
      turn(cube, "S'");

      break;

    case "b":
      turn(cube, "B");
      turn(cube, "S'");

      break;

    case "b'":
      turn(cube, "B'");
      turn(cube, "S");

      break;

    case "X":
      turn(cube, "R");
      turn(cube, "M'");
      turn(cube, "L'");

      return 0;

    case "X'":
      turn(cube, "R'");
      turn(cube, "M");
      turn(cube, "L");

      return 0;

    case "Y":
      turn(cube, "U");
      turn(cube, "E'");
      turn(cube, "D'");

      return 0;

    case "Y'":
      turn(cube, "U'");
      turn(cube, "E");
      turn(cube, "D");

      return 0;

    case "Z":
      turn(cube, "F");
      turn(cube, "S");
      turn(cube, "B'");

      return 0;

    case "Z'":
      turn(cube, "F'");
      turn(cube, "S'");
      turn(cube, "B");

      return 0;

    default:
      console.log(`Skipping invalid move: ${move}`);
      return 0;
  }

  return 1;
}

export function getStickerColour(
  cube: CubeData,
  pieceType: "corner" | "edge" | "center",
  letter: string,
) {
  if (pieceType === "corner") {
    switch (letter) {
      case "A":
        return cube.corners.UBL.U.colour;

      case "B":
        return cube.corners.UBR.U.colour;

      case "C":
        return cube.corners.UFR.U.colour;

      case "D":
        return cube.corners.UFL.U.colour;

      case "E":
        return cube.corners.UBL.L.colour;

      case "F":
        return cube.corners.UFL.L.colour;

      case "G":
        return cube.corners.DFL.L.colour;

      case "H":
        return cube.corners.DBL.L.colour;

      case "I":
        return cube.corners.UFL.F.colour;

      case "J":
        return cube.corners.UFR.F.colour;

      case "K":
        return cube.corners.DFR.F.colour;

      case "L":
        return cube.corners.DFL.F.colour;

      case "M":
        return cube.corners.UFR.R.colour;

      case "N":
        return cube.corners.UBR.R.colour;

      case "O":
        return cube.corners.DBR.R.colour;

      case "P":
        return cube.corners.DFR.R.colour;

      case "Q":
        return cube.corners.UBR.B.colour;

      case "R":
        return cube.corners.UBL.B.colour;

      case "S":
        return cube.corners.DBL.B.colour;

      case "T":
        return cube.corners.DBR.B.colour;

      case "U":
        return cube.corners.DFL.D.colour;

      case "V":
        return cube.corners.DFR.D.colour;

      case "W":
        return cube.corners.DBR.D.colour;

      case "X":
        return cube.corners.DBL.D.colour;
    }
  } else if (pieceType === "edge") {
    switch (letter) {
      case "A":
        return cube.edges.UB.U.colour;

      case "B":
        return cube.edges.UR.U.colour;

      case "C":
        return cube.edges.UF.U.colour;

      case "D":
        return cube.edges.UL.U.colour;

      case "E":
        return cube.edges.UL.L.colour;

      case "F":
        return cube.edges.FL.L.colour;

      case "G":
        return cube.edges.DL.L.colour;

      case "H":
        return cube.edges.BL.L.colour;

      case "I":
        return cube.edges.UF.F.colour;

      case "J":
        return cube.edges.FR.F.colour;

      case "K":
        return cube.edges.DF.F.colour;

      case "L":
        return cube.edges.FL.F.colour;

      case "M":
        return cube.edges.UR.R.colour;

      case "N":
        return cube.edges.BR.R.colour;

      case "O":
        return cube.edges.DR.R.colour;

      case "P":
        return cube.edges.FR.R.colour;

      case "Q":
        return cube.edges.UB.B.colour;

      case "R":
        return cube.edges.BL.B.colour;

      case "S":
        return cube.edges.DB.B.colour;

      case "T":
        return cube.edges.BR.B.colour;

      case "U":
        return cube.edges.DF.D.colour;

      case "V":
        return cube.edges.DR.D.colour;

      case "W":
        return cube.edges.DB.D.colour;

      case "X":
        return cube.edges.DL.D.colour;
    }
  } else if (pieceType === "center") {
    switch (letter) {
      case "U":
        return cube.centers.U.colour;

      case "D":
        return cube.centers.D.colour;

      case "F":
        return cube.centers.F.colour;

      case "B":
        return cube.centers.B.colour;

      case "R":
        return cube.centers.R.colour;

      case "L":
        return cube.centers.L.colour;
    }
  }
  throw new Error(`Invalid letter: ${letter}`);
}

export function setStickerColour(
  cube: CubeData,
  pieceType: "corner" | "edge" | "center",
  letter: ValidStickerLetter,
  colour: CubeColour,
) {
  if (pieceType === "corner") {
    switch (letter) {
      case "A":
        cube.corners.UBL.U.colour = colour;
        return cube;

      case "B":
        cube.corners.UBR.U.colour = colour;
        return cube;

      case "C":
        cube.corners.UFR.U.colour = colour;
        return cube;

      case "D":
        cube.corners.UFL.U.colour = colour;
        return cube;

      case "E":
        cube.corners.UBL.L.colour = colour;
        return cube;

      case "F":
        cube.corners.UFL.L.colour = colour;
        return cube;

      case "G":
        cube.corners.DFL.L.colour = colour;
        return cube;

      case "H":
        cube.corners.DBL.L.colour = colour;
        return cube;

      case "I":
        cube.corners.UFL.F.colour = colour;
        return cube;

      case "J":
        cube.corners.UFR.F.colour = colour;
        return cube;

      case "K":
        cube.corners.DFR.F.colour = colour;
        return cube;

      case "L":
        cube.corners.DFL.F.colour = colour;
        return cube;

      case "M":
        cube.corners.UFR.R.colour = colour;
        return cube;

      case "N":
        cube.corners.UBR.R.colour = colour;
        return cube;

      case "O":
        cube.corners.DBR.R.colour = colour;
        return cube;

      case "P":
        cube.corners.DFR.R.colour = colour;
        return cube;

      case "Q":
        cube.corners.UBR.B.colour = colour;
        return cube;

      case "R":
        cube.corners.UBL.B.colour = colour;
        return cube;

      case "S":
        cube.corners.DBL.B.colour = colour;
        return cube;

      case "T":
        cube.corners.DBR.B.colour = colour;
        return cube;

      case "U":
        cube.corners.DFL.D.colour = colour;
        return cube;

      case "V":
        cube.corners.DFR.D.colour = colour;
        return cube;

      case "W":
        cube.corners.DBR.D.colour = colour;
        return cube;

      case "X":
        cube.corners.DBL.D.colour = colour;
        return cube;
    }
  } else if (pieceType === "edge") {
    switch (letter) {
      case "A":
        cube.edges.UB.U.colour = colour;
        return cube;

      case "B":
        cube.edges.UR.U.colour = colour;
        return cube;

      case "C":
        cube.edges.UF.U.colour = colour;
        return cube;

      case "D":
        cube.edges.UL.U.colour = colour;
        return cube;

      case "E":
        cube.edges.UL.L.colour = colour;
        return cube;

      case "F":
        cube.edges.FL.L.colour = colour;
        return cube;

      case "G":
        cube.edges.DL.L.colour = colour;
        return cube;

      case "H":
        cube.edges.BL.L.colour = colour;
        return cube;

      case "I":
        cube.edges.UF.F.colour = colour;
        return cube;

      case "J":
        cube.edges.FR.F.colour = colour;
        return cube;

      case "K":
        cube.edges.DF.F.colour = colour;
        return cube;

      case "L":
        cube.edges.FL.F.colour = colour;
        return cube;

      case "M":
        cube.edges.UR.R.colour = colour;
        return cube;

      case "N":
        cube.edges.BR.R.colour = colour;
        return cube;

      case "O":
        cube.edges.DR.R.colour = colour;
        return cube;

      case "P":
        cube.edges.FR.R.colour = colour;
        return cube;

      case "Q":
        cube.edges.UB.B.colour = colour;
        return cube;

      case "R":
        cube.edges.BL.B.colour = colour;
        return cube;

      case "S":
        cube.edges.DB.B.colour = colour;
        return cube;

      case "T":
        cube.edges.BR.B.colour = colour;
        return cube;

      case "U":
        cube.edges.DF.D.colour = colour;
        return cube;

      case "V":
        cube.edges.DR.D.colour = colour;
        return cube;

      case "W":
        cube.edges.DB.D.colour = colour;
        return cube;

      case "X":
        cube.edges.DL.D.colour = colour;
        return cube;
    }
  } else if (pieceType === "center") {
    switch (letter) {
      case "U":
        cube.centers.U.colour = colour;
        return cube;

      case "D":
        cube.centers.D.colour = colour;
        return cube;

      case "F":
        cube.centers.F.colour = colour;
        return cube;

      case "B":
        cube.centers.B.colour = colour;
        return cube;

      case "R":
        cube.centers.R.colour = colour;
        return cube;

      case "L":
        cube.centers.L.colour = colour;
        return cube;
    }
  }
  throw new Error("Invalid letter");
}

export function nextStickerClockwise(
  pieceType: "corner" | "edge",
  letter: ValidStickerLetter,
) {
  if (pieceType === "corner") {
    switch (letter) {
      case "A":
        return "E";

      case "B":
        return "Q";

      case "C":
        return "M";

      case "D":
        return "I";

      case "E":
        return "R";

      case "F":
        return "D";

      case "G":
        return "L";

      case "H":
        return "X";

      case "I":
        return "F";

      case "J":
        return "C";

      case "K":
        return "P";

      case "L":
        return "U";

      case "M":
        return "J";

      case "N":
        return "B";

      case "O":
        return "T";

      case "P":
        return "V";

      case "Q":
        return "N";

      case "R":
        return "A";

      case "S":
        return "H";

      case "T":
        return "W";

      case "U":
        return "G";

      case "V":
        return "K";

      case "W":
        return "O";

      case "X":
        return "S";
    }
  } else {
    switch (letter) {
      case "A":
        return "Q";

      case "B":
        return "M";

      case "C":
        return "I";

      case "D":
        return "E";

      case "E":
        return "D";

      case "F":
        return "L";

      case "G":
        return "X";

      case "H":
        return "R";

      case "I":
        return "C";

      case "J":
        return "P";

      case "K":
        return "U";

      case "L":
        return "F";

      case "M":
        return "B";

      case "N":
        return "T";

      case "O":
        return "V";

      case "P":
        return "J";

      case "Q":
        return "A";

      case "R":
        return "H";

      case "S":
        return "W";

      case "T":
        return "N";

      case "U":
        return "K";

      case "V":
        return "O";

      case "W":
        return "S";

      case "X":
        return "G";
    }
  }
  throw new Error("Invalid letter");
}

export function swap(
  cube: CubeData,
  pieceType: "corner" | "edge",
  buffer: ValidStickerLetter,
  letter: ValidStickerLetter,
) {
  if (pieceType === "corner") {
    const bufferStickers = [
      buffer,
      nextStickerClockwise(pieceType, buffer),
      nextStickerClockwise(pieceType, nextStickerClockwise(pieceType, buffer)),
    ] as const;
    const bufferColours = [
      getStickerColour(cube, pieceType, bufferStickers[0]),
      getStickerColour(cube, pieceType, bufferStickers[1]),
      getStickerColour(cube, pieceType, bufferStickers[2]),
    ] as const;

    const letterStickers = [
      letter,
      nextStickerClockwise(pieceType, letter),
      nextStickerClockwise(pieceType, nextStickerClockwise(pieceType, letter)),
    ] as const;
    const letterColours = [
      getStickerColour(cube, pieceType, letterStickers[0]),
      getStickerColour(cube, pieceType, letterStickers[1]),
      getStickerColour(cube, pieceType, letterStickers[2]),
    ] as const;

    setStickerColour(cube, pieceType, bufferStickers[0], letterColours[0]);
    setStickerColour(cube, pieceType, bufferStickers[1], letterColours[1]);
    setStickerColour(cube, pieceType, bufferStickers[2], letterColours[2]);

    setStickerColour(cube, pieceType, letterStickers[0], bufferColours[0]);
    setStickerColour(cube, pieceType, letterStickers[1], bufferColours[1]);
    setStickerColour(cube, pieceType, letterStickers[2], bufferColours[2]);
  } else if (pieceType === "edge") {
    const bufferStickers = [
      buffer,
      nextStickerClockwise(pieceType, buffer),
    ] as const;
    const bufferColours = [
      getStickerColour(cube, pieceType, bufferStickers[0]),
      getStickerColour(cube, pieceType, bufferStickers[1]),
    ] as const;

    const letterStickers = [
      letter,
      nextStickerClockwise(pieceType, letter),
    ] as const;
    const letterColours = [
      getStickerColour(cube, pieceType, letterStickers[0]),
      getStickerColour(cube, pieceType, letterStickers[1]),
    ] as const;

    setStickerColour(cube, pieceType, bufferStickers[0], letterColours[0]);
    setStickerColour(cube, pieceType, bufferStickers[1], letterColours[1]);

    setStickerColour(cube, pieceType, letterStickers[0], bufferColours[0]);
    setStickerColour(cube, pieceType, letterStickers[1], bufferColours[1]);
  }
}

export function printCube(cube: CubeData) {
  console.log("U");
  console.log(
    getStickerColour(cube, "corner", "A"),
    getStickerColour(cube, "edge", "A"),
    getStickerColour(cube, "corner", "B"),
  );
  console.log(
    getStickerColour(cube, "edge", "D"),
    getStickerColour(cube, "center", "U"),
    getStickerColour(cube, "edge", "B"),
  );
  console.log(
    getStickerColour(cube, "corner", "D"),
    getStickerColour(cube, "edge", "C"),
    getStickerColour(cube, "corner", "C"),
  );

  console.log("L");
  console.log(
    getStickerColour(cube, "corner", "E"),
    getStickerColour(cube, "edge", "E"),
    getStickerColour(cube, "corner", "F"),
  );
  console.log(
    getStickerColour(cube, "edge", "H"),
    getStickerColour(cube, "center", "L"),
    getStickerColour(cube, "edge", "F"),
  );
  console.log(
    getStickerColour(cube, "corner", "H"),
    getStickerColour(cube, "edge", "G"),
    getStickerColour(cube, "corner", "G"),
  );

  console.log("F");
  console.log(
    getStickerColour(cube, "corner", "I"),
    getStickerColour(cube, "edge", "I"),
    getStickerColour(cube, "corner", "J"),
  );
  console.log(
    getStickerColour(cube, "edge", "L"),
    getStickerColour(cube, "center", "F"),
    getStickerColour(cube, "edge", "J"),
  );
  console.log(
    getStickerColour(cube, "corner", "L"),
    getStickerColour(cube, "edge", "K"),
    getStickerColour(cube, "corner", "K"),
  );

  console.log("R");
  console.log(
    getStickerColour(cube, "corner", "M"),
    getStickerColour(cube, "edge", "M"),
    getStickerColour(cube, "corner", "N"),
  );
  console.log(
    getStickerColour(cube, "edge", "P"),
    getStickerColour(cube, "center", "R"),
    getStickerColour(cube, "edge", "N"),
  );
  console.log(
    getStickerColour(cube, "corner", "P"),
    getStickerColour(cube, "edge", "O"),
    getStickerColour(cube, "corner", "O"),
  );

  console.log("B");
  console.log(
    getStickerColour(cube, "corner", "Q"),
    getStickerColour(cube, "edge", "Q"),
    getStickerColour(cube, "corner", "R"),
  );
  console.log(
    getStickerColour(cube, "edge", "T"),
    getStickerColour(cube, "center", "B"),
    getStickerColour(cube, "edge", "R"),
  );
  console.log(
    getStickerColour(cube, "corner", "T"),
    getStickerColour(cube, "edge", "S"),
    getStickerColour(cube, "corner", "S"),
  );

  console.log("D");
  console.log(
    getStickerColour(cube, "corner", "U"),
    getStickerColour(cube, "edge", "U"),
    getStickerColour(cube, "corner", "V"),
  );
  console.log(
    getStickerColour(cube, "edge", "X"),
    getStickerColour(cube, "center", "D"),
    getStickerColour(cube, "edge", "V"),
  );
  console.log(
    getStickerColour(cube, "corner", "X"),
    getStickerColour(cube, "edge", "W"),
    getStickerColour(cube, "corner", "W"),
  );
}
