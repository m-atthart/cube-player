export type CubeColour =
  | "white"
  | "yellow"
  | "green"
  | "blue"
  | "red"
  | "orange";

export type Cube = {
  corners: {
    UBL: {
      U: CubeColour;
      B: CubeColour;
      L: CubeColour;
    };
    UBR: {
      U: CubeColour;
      B: CubeColour;
      R: CubeColour;
    };
    UFR: {
      U: CubeColour;
      F: CubeColour;
      R: CubeColour;
    };
    UFL: {
      U: CubeColour;
      F: CubeColour;
      L: CubeColour;
    };
    DFL: {
      D: CubeColour;
      F: CubeColour;
      L: CubeColour;
    };
    DFR: {
      D: CubeColour;
      F: CubeColour;
      R: CubeColour;
    };
    DBR: {
      D: CubeColour;
      B: CubeColour;
      R: CubeColour;
    };
    DBL: {
      D: CubeColour;
      B: CubeColour;
      L: CubeColour;
    };
  };
  edges: {
    UB: {
      U: CubeColour;
      B: CubeColour;
    };
    UR: {
      U: CubeColour;
      R: CubeColour;
    };
    UF: {
      U: CubeColour;
      F: CubeColour;
    };
    UL: {
      U: CubeColour;
      L: CubeColour;
    };
    FL: {
      F: CubeColour;
      L: CubeColour;
    };
    FR: {
      F: CubeColour;
      R: CubeColour;
    };
    BR: {
      B: CubeColour;
      R: CubeColour;
    };
    BL: {
      B: CubeColour;
      L: CubeColour;
    };
    DF: {
      D: CubeColour;
      F: CubeColour;
    };
    DR: {
      D: CubeColour;
      R: CubeColour;
    };
    DB: {
      D: CubeColour;
      B: CubeColour;
    };
    DL: {
      D: CubeColour;
      L: CubeColour;
    };
  };
  centers: {
    U: CubeColour;
    D: CubeColour;
    F: CubeColour;
    B: CubeColour;
    R: CubeColour;
    L: CubeColour;
  };
};

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
  const solvedCube: Cube = {
    corners: {
      UBL: {
        U: "blue",
        B: "yellow",
        L: "orange",
      },
      UBR: {
        U: "blue",
        B: "yellow",
        R: "red",
      },
      UFR: {
        U: "blue",
        F: "white",
        R: "red",
      },
      UFL: {
        U: "blue",
        F: "white",
        L: "orange",
      },
      DFL: {
        D: "green",
        F: "white",
        L: "orange",
      },
      DFR: {
        D: "green",
        F: "white",
        R: "red",
      },
      DBR: {
        D: "green",
        B: "yellow",
        R: "red",
      },
      DBL: {
        D: "green",
        B: "yellow",
        L: "orange",
      },
    },
    edges: {
      UB: {
        U: "blue",
        B: "yellow",
      },
      UR: {
        U: "blue",
        R: "red",
      },
      UF: {
        U: "blue",
        F: "white",
      },
      UL: {
        U: "blue",
        L: "orange",
      },
      FL: {
        F: "white",
        L: "orange",
      },
      FR: {
        F: "white",
        R: "red",
      },
      BR: {
        B: "yellow",
        R: "red",
      },
      BL: {
        B: "yellow",
        L: "orange",
      },
      DF: {
        D: "green",
        F: "white",
      },
      DR: {
        D: "green",
        R: "red",
      },
      DB: {
        D: "green",
        B: "yellow",
      },
      DL: {
        D: "green",
        L: "orange",
      },
    },
    centers: {
      U: "blue",
      D: "green",
      F: "white",
      B: "yellow",
      R: "red",
      L: "orange",
    },
  };

  return solvedCube;
}

export function performAlg(cube: Cube, algorithm: string) {
  const moves = algorithm.split(" ");
  let validMoveCount = 0;

  for (const move of moves) {
    const lastChar = parseInt(move.slice(-1));
    if (!isNaN(lastChar)) {
      validMoveCount += turn(cube, move.slice(0, -1));
      for (let i = 1; i < lastChar; i++) turn(cube, move.slice(0, -1));
    } else {
      validMoveCount += turn(cube, move);
    }
  }

  return validMoveCount;
}

export function turn(cube: Cube, move: string) {
  switch (move) {
    case "R": {
      const tempCorner = { ...cube.corners.UFR };
      const tempEdge = { ...cube.edges.UR };

      cube.corners.UFR.U = cube.corners.DFR.F;
      cube.corners.UFR.F = cube.corners.DFR.D;
      cube.corners.UFR.R = cube.corners.DFR.R;

      cube.corners.DFR.D = cube.corners.DBR.B;
      cube.corners.DFR.F = cube.corners.DBR.D;
      cube.corners.DFR.R = cube.corners.DBR.R;

      cube.corners.DBR.D = cube.corners.UBR.B;
      cube.corners.DBR.B = cube.corners.UBR.U;
      cube.corners.DBR.R = cube.corners.UBR.R;

      cube.corners.UBR.U = tempCorner.F;
      cube.corners.UBR.B = tempCorner.U;
      cube.corners.UBR.R = tempCorner.R;

      cube.edges.UR.U = cube.edges.FR.F;
      cube.edges.UR.R = cube.edges.FR.R;

      cube.edges.FR.F = cube.edges.DR.D;
      cube.edges.FR.R = cube.edges.DR.R;

      cube.edges.DR.D = cube.edges.BR.B;
      cube.edges.DR.R = cube.edges.BR.R;

      cube.edges.BR.B = tempEdge.U;
      cube.edges.BR.R = tempEdge.R;

      break;
    }

    case "R'": {
      const tempCorner = { ...cube.corners.UFR };
      const tempEdge = { ...cube.edges.UR };

      cube.corners.UFR.U = cube.corners.UBR.B;
      cube.corners.UFR.F = cube.corners.UBR.U;
      cube.corners.UFR.R = cube.corners.UBR.R;

      cube.corners.UBR.U = cube.corners.DBR.B;
      cube.corners.UBR.B = cube.corners.DBR.D;
      cube.corners.UBR.R = cube.corners.DBR.R;

      cube.corners.DBR.D = cube.corners.DFR.F;
      cube.corners.DBR.B = cube.corners.DFR.D;
      cube.corners.DBR.R = cube.corners.DFR.R;

      cube.corners.DFR.D = tempCorner.F;
      cube.corners.DFR.F = tempCorner.U;
      cube.corners.DFR.R = tempCorner.R;

      cube.edges.UR.U = cube.edges.BR.B;
      cube.edges.UR.R = cube.edges.BR.R;

      cube.edges.BR.B = cube.edges.DR.D;
      cube.edges.BR.R = cube.edges.DR.R;

      cube.edges.DR.D = cube.edges.FR.F;
      cube.edges.DR.R = cube.edges.FR.R;

      cube.edges.FR.F = tempEdge.U;
      cube.edges.FR.R = tempEdge.R;

      break;
    }

    case "L": {
      const tempCorner = { ...cube.corners.UFL };
      const tempEdge = { ...cube.edges.UL };

      cube.corners.UFL.U = cube.corners.UBL.B;
      cube.corners.UFL.F = cube.corners.UBL.U;
      cube.corners.UFL.L = cube.corners.UBL.L;

      cube.corners.UBL.U = cube.corners.DBL.B;
      cube.corners.UBL.B = cube.corners.DBL.D;
      cube.corners.UBL.L = cube.corners.DBL.L;

      cube.corners.DBL.D = cube.corners.DFL.F;
      cube.corners.DBL.B = cube.corners.DFL.D;
      cube.corners.DBL.L = cube.corners.DFL.L;

      cube.corners.DFL.D = tempCorner.F;
      cube.corners.DFL.F = tempCorner.U;
      cube.corners.DFL.L = tempCorner.L;

      cube.edges.UL.U = cube.edges.BL.B;
      cube.edges.UL.L = cube.edges.BL.L;

      cube.edges.BL.B = cube.edges.DL.D;
      cube.edges.BL.L = cube.edges.DL.L;

      cube.edges.DL.D = cube.edges.FL.F;
      cube.edges.DL.L = cube.edges.FL.L;

      cube.edges.FL.F = tempEdge.U;
      cube.edges.FL.L = tempEdge.L;

      break;
    }

    case "L'": {
      const tempCorner = { ...cube.corners.UFL };
      const tempEdge = { ...cube.edges.UL };

      cube.corners.UFL.U = cube.corners.DFL.F;
      cube.corners.UFL.F = cube.corners.DFL.D;
      cube.corners.UFL.L = cube.corners.DFL.L;

      cube.corners.DFL.D = cube.corners.DBL.B;
      cube.corners.DFL.F = cube.corners.DBL.D;
      cube.corners.DFL.L = cube.corners.DBL.L;

      cube.corners.DBL.D = cube.corners.UBL.B;
      cube.corners.DBL.B = cube.corners.UBL.U;
      cube.corners.DBL.L = cube.corners.UBL.L;

      cube.corners.UBL.U = tempCorner.F;
      cube.corners.UBL.B = tempCorner.U;
      cube.corners.UBL.L = tempCorner.L;

      cube.edges.UL.U = cube.edges.FL.F;
      cube.edges.UL.L = cube.edges.FL.L;

      cube.edges.FL.F = cube.edges.DL.D;
      cube.edges.FL.L = cube.edges.DL.L;

      cube.edges.DL.D = cube.edges.BL.B;
      cube.edges.DL.L = cube.edges.BL.L;

      cube.edges.BL.B = tempEdge.U;
      cube.edges.BL.L = tempEdge.L;

      break;
    }

    case "U": {
      const tempCorner = { ...cube.corners.UFR };
      const tempEdge = { ...cube.edges.UF };

      cube.corners.UFR.U = cube.corners.UBR.U;
      cube.corners.UFR.F = cube.corners.UBR.R;
      cube.corners.UFR.R = cube.corners.UBR.B;

      cube.corners.UBR.U = cube.corners.UBL.U;
      cube.corners.UBR.B = cube.corners.UBL.L;
      cube.corners.UBR.R = cube.corners.UBL.B;

      cube.corners.UBL.U = cube.corners.UFL.U;
      cube.corners.UBL.B = cube.corners.UFL.L;
      cube.corners.UBL.L = cube.corners.UFL.F;

      cube.corners.UFL.U = tempCorner.U;
      cube.corners.UFL.F = tempCorner.R;
      cube.corners.UFL.L = tempCorner.F;

      cube.edges.UF.U = cube.edges.UR.U;
      cube.edges.UF.F = cube.edges.UR.R;

      cube.edges.UR.U = cube.edges.UB.U;
      cube.edges.UR.R = cube.edges.UB.B;

      cube.edges.UB.U = cube.edges.UL.U;
      cube.edges.UB.B = cube.edges.UL.L;

      cube.edges.UL.U = tempEdge.U;
      cube.edges.UL.L = tempEdge.F;

      break;
    }

    case "U'": {
      const tempCorner = { ...cube.corners.UFL };
      const tempEdge = { ...cube.edges.UF };

      cube.corners.UFL.U = cube.corners.UBL.U;
      cube.corners.UFL.F = cube.corners.UBL.L;
      cube.corners.UFL.L = cube.corners.UBL.B;

      cube.corners.UBL.U = cube.corners.UBR.U;
      cube.corners.UBL.B = cube.corners.UBR.R;
      cube.corners.UBL.L = cube.corners.UBR.B;

      cube.corners.UBR.U = cube.corners.UFR.U;
      cube.corners.UBR.R = cube.corners.UFR.F;
      cube.corners.UBR.B = cube.corners.UFR.R;

      cube.corners.UFR.U = tempCorner.U;
      cube.corners.UFR.F = tempCorner.L;
      cube.corners.UFR.R = tempCorner.F;

      cube.edges.UF.U = cube.edges.UL.U;
      cube.edges.UF.F = cube.edges.UL.L;

      cube.edges.UL.U = cube.edges.UB.U;
      cube.edges.UL.L = cube.edges.UB.B;

      cube.edges.UB.U = cube.edges.UR.U;
      cube.edges.UB.B = cube.edges.UR.R;

      cube.edges.UR.U = tempEdge.U;
      cube.edges.UR.R = tempEdge.F;

      break;
    }

    case "D": {
      const tempCorner = { ...cube.corners.DFR };
      const tempEdge = { ...cube.edges.DF };

      cube.corners.DFR.D = cube.corners.DFL.D;
      cube.corners.DFR.F = cube.corners.DFL.L;
      cube.corners.DFR.R = cube.corners.DFL.F;

      cube.corners.DFL.D = cube.corners.DBL.D;
      cube.corners.DFL.F = cube.corners.DBL.L;
      cube.corners.DFL.L = cube.corners.DBL.B;

      cube.corners.DBL.D = cube.corners.DBR.D;
      cube.corners.DBL.B = cube.corners.DBR.R;
      cube.corners.DBL.L = cube.corners.DBR.B;

      cube.corners.DBR.D = tempCorner.D;
      cube.corners.DBR.B = tempCorner.R;
      cube.corners.DBR.R = tempCorner.F;

      cube.edges.DF.D = cube.edges.DL.D;
      cube.edges.DF.F = cube.edges.DL.L;

      cube.edges.DL.D = cube.edges.DB.D;
      cube.edges.DL.L = cube.edges.DB.B;

      cube.edges.DB.D = cube.edges.DR.D;
      cube.edges.DB.B = cube.edges.DR.R;

      cube.edges.DR.D = tempEdge.D;
      cube.edges.DR.R = tempEdge.F;

      break;
    }

    case "D'": {
      const tempCorner = { ...cube.corners.DFR };
      const tempEdge = { ...cube.edges.DF };

      cube.corners.DFR.D = cube.corners.DBR.D;
      cube.corners.DFR.F = cube.corners.DBR.R;
      cube.corners.DFR.R = cube.corners.DBR.B;

      cube.corners.DBR.D = cube.corners.DBL.D;
      cube.corners.DBR.B = cube.corners.DBL.L;
      cube.corners.DBR.R = cube.corners.DBL.B;

      cube.corners.DBL.D = cube.corners.DFL.D;
      cube.corners.DBL.B = cube.corners.DFL.L;
      cube.corners.DBL.L = cube.corners.DFL.F;

      cube.corners.DFL.D = tempCorner.D;
      cube.corners.DFL.F = tempCorner.R;
      cube.corners.DFL.L = tempCorner.F;

      cube.edges.DF.D = cube.edges.DR.D;
      cube.edges.DF.F = cube.edges.DR.R;

      cube.edges.DR.D = cube.edges.DB.D;
      cube.edges.DR.R = cube.edges.DB.B;

      cube.edges.DB.D = cube.edges.DL.D;
      cube.edges.DB.B = cube.edges.DL.L;

      cube.edges.DL.D = tempEdge.D;
      cube.edges.DL.L = tempEdge.F;

      break;
    }

    case "F": {
      const tempCorner = { ...cube.corners.UFR };
      const tempEdge = { ...cube.edges.UF };

      cube.corners.UFR.U = cube.corners.UFL.L;
      cube.corners.UFR.F = cube.corners.UFL.F;
      cube.corners.UFR.R = cube.corners.UFL.U;

      cube.corners.UFL.U = cube.corners.DFL.L;
      cube.corners.UFL.F = cube.corners.DFL.F;
      cube.corners.UFL.L = cube.corners.DFL.D;

      cube.corners.DFL.D = cube.corners.DFR.R;
      cube.corners.DFL.F = cube.corners.DFR.F;
      cube.corners.DFL.L = cube.corners.DFR.D;

      cube.corners.DFR.D = tempCorner.R;
      cube.corners.DFR.F = tempCorner.F;
      cube.corners.DFR.R = tempCorner.U;

      cube.edges.UF.U = cube.edges.FL.L;
      cube.edges.UF.F = cube.edges.FL.F;

      cube.edges.FL.F = cube.edges.DF.F;
      cube.edges.FL.L = cube.edges.DF.D;

      cube.edges.DF.D = cube.edges.FR.R;
      cube.edges.DF.F = cube.edges.FR.F;

      cube.edges.FR.F = tempEdge.F;
      cube.edges.FR.R = tempEdge.U;

      break;
    }

    case "F'": {
      const tempCorner = { ...cube.corners.UFR };
      const tempEdge = { ...cube.edges.UF };

      cube.corners.UFR.U = cube.corners.DFR.R;
      cube.corners.UFR.F = cube.corners.DFR.F;
      cube.corners.UFR.R = cube.corners.DFR.D;

      cube.corners.DFR.D = cube.corners.DFL.L;
      cube.corners.DFR.F = cube.corners.DFL.F;
      cube.corners.DFR.R = cube.corners.DFL.D;

      cube.corners.DFL.D = cube.corners.UFL.L;
      cube.corners.DFL.F = cube.corners.UFL.F;
      cube.corners.DFL.L = cube.corners.UFL.U;

      cube.corners.UFL.U = tempCorner.R;
      cube.corners.UFL.F = tempCorner.F;
      cube.corners.UFL.L = tempCorner.U;

      cube.edges.UF.U = cube.edges.FR.R;
      cube.edges.UF.F = cube.edges.FR.F;

      cube.edges.FR.F = cube.edges.DF.F;
      cube.edges.FR.R = cube.edges.DF.D;

      cube.edges.DF.D = cube.edges.FL.L;
      cube.edges.DF.F = cube.edges.FL.F;

      cube.edges.FL.F = tempEdge.F;
      cube.edges.FL.L = tempEdge.U;

      break;
    }

    case "B": {
      const tempCorner = { ...cube.corners.UBR };
      const tempEdge = { ...cube.edges.UB };

      cube.corners.UBR.U = cube.corners.DBR.R;
      cube.corners.UBR.B = cube.corners.DBR.B;
      cube.corners.UBR.R = cube.corners.DBR.D;

      cube.corners.DBR.D = cube.corners.DBL.L;
      cube.corners.DBR.B = cube.corners.DBL.B;
      cube.corners.DBR.R = cube.corners.DBL.D;

      cube.corners.DBL.D = cube.corners.UBL.L;
      cube.corners.DBL.B = cube.corners.UBL.B;
      cube.corners.DBL.L = cube.corners.UBL.U;

      cube.corners.UBL.U = tempCorner.R;
      cube.corners.UBL.B = tempCorner.B;
      cube.corners.UBL.L = tempCorner.U;

      cube.edges.UB.U = cube.edges.BR.R;
      cube.edges.UB.B = cube.edges.BR.B;

      cube.edges.BR.B = cube.edges.DB.B;
      cube.edges.BR.R = cube.edges.DB.D;

      cube.edges.DB.D = cube.edges.BL.L;
      cube.edges.DB.B = cube.edges.BL.B;

      cube.edges.BL.B = tempEdge.B;
      cube.edges.BL.L = tempEdge.U;

      break;
    }

    case "B'": {
      const tempCorner = { ...cube.corners.UBR };
      const tempEdge = { ...cube.edges.UB };

      cube.corners.UBR.U = cube.corners.UBL.L;
      cube.corners.UBR.B = cube.corners.UBL.B;
      cube.corners.UBR.R = cube.corners.UBL.U;

      cube.corners.UBL.U = cube.corners.DBL.L;
      cube.corners.UBL.B = cube.corners.DBL.B;
      cube.corners.UBL.L = cube.corners.DBL.D;

      cube.corners.DBL.D = cube.corners.DBR.R;
      cube.corners.DBL.B = cube.corners.DBR.B;
      cube.corners.DBL.L = cube.corners.DBR.D;

      cube.corners.DBR.D = tempCorner.R;
      cube.corners.DBR.B = tempCorner.B;
      cube.corners.DBR.R = tempCorner.U;

      cube.edges.UB.U = cube.edges.BL.L;
      cube.edges.UB.B = cube.edges.BL.B;

      cube.edges.BL.B = cube.edges.DB.B;
      cube.edges.BL.L = cube.edges.DB.D;

      cube.edges.DB.D = cube.edges.BR.R;
      cube.edges.DB.B = cube.edges.BR.B;

      cube.edges.BR.B = tempEdge.B;
      cube.edges.BR.R = tempEdge.U;

      break;
    }

    // M follows L
    case "M": {
      const tempEdge = { ...cube.edges.UF };
      const tempCenter = cube.centers.U;

      cube.edges.UF.U = cube.edges.UB.B;
      cube.edges.UF.F = cube.edges.UB.U;

      cube.edges.UB.U = cube.edges.DB.B;
      cube.edges.UB.B = cube.edges.DB.D;

      cube.edges.DB.D = cube.edges.DF.F;
      cube.edges.DB.B = cube.edges.DF.D;

      cube.edges.DF.D = tempEdge.F;
      cube.edges.DF.F = tempEdge.U;

      cube.centers.U = cube.centers.B;
      cube.centers.B = cube.centers.D;
      cube.centers.D = cube.centers.F;
      cube.centers.F = tempCenter;

      break;
    }

    case "M'": {
      const tempEdge = { ...cube.edges.UF };
      const tempCenter = cube.centers.U;

      cube.edges.UF.U = cube.edges.DF.F;
      cube.edges.UF.F = cube.edges.DF.D;

      cube.edges.DF.D = cube.edges.DB.B;
      cube.edges.DF.F = cube.edges.DB.D;

      cube.edges.DB.D = cube.edges.UB.B;
      cube.edges.DB.B = cube.edges.UB.U;

      cube.edges.UB.U = tempEdge.F;
      cube.edges.UB.B = tempEdge.U;

      cube.centers.U = cube.centers.F;
      cube.centers.F = cube.centers.D;
      cube.centers.D = cube.centers.B;
      cube.centers.B = tempCenter;

      break;
    }

    // S follows F
    case "S": {
      const tempEdge = { ...cube.edges.UR };
      const tempCenter = cube.centers.U;

      cube.edges.UR.U = cube.edges.UL.L;
      cube.edges.UR.R = cube.edges.UL.U;

      cube.edges.UL.U = cube.edges.DL.L;
      cube.edges.UL.L = cube.edges.DL.D;

      cube.edges.DL.D = cube.edges.DR.R;
      cube.edges.DL.L = cube.edges.DR.D;

      cube.edges.DR.D = tempEdge.R;
      cube.edges.DR.R = tempEdge.U;

      cube.centers.U = cube.centers.L;
      cube.centers.L = cube.centers.D;
      cube.centers.D = cube.centers.R;
      cube.centers.R = tempCenter;

      break;
    }

    case "S'": {
      const tempEdge = { ...cube.edges.UR };
      const tempCenter = cube.centers.U;

      cube.edges.UR.U = cube.edges.DR.R;
      cube.edges.UR.R = cube.edges.DR.D;

      cube.edges.DR.D = cube.edges.DL.L;
      cube.edges.DR.R = cube.edges.DL.D;

      cube.edges.DL.D = cube.edges.UL.L;
      cube.edges.DL.L = cube.edges.UL.U;

      cube.edges.UL.U = tempEdge.R;
      cube.edges.UL.L = tempEdge.U;

      cube.centers.U = cube.centers.R;
      cube.centers.R = cube.centers.D;
      cube.centers.D = cube.centers.L;
      cube.centers.L = tempCenter;

      break;
    }

    // E follows D
    case "E": {
      const tempEdge = { ...cube.edges.FR };
      const tempCenter = cube.centers.F;

      cube.edges.FR.F = cube.edges.FL.L;
      cube.edges.FR.R = cube.edges.FL.F;

      cube.edges.FL.F = cube.edges.BL.L;
      cube.edges.FL.L = cube.edges.BL.B;

      cube.edges.BL.B = cube.edges.BR.R;
      cube.edges.BL.L = cube.edges.BR.B;

      cube.edges.BR.B = tempEdge.R;
      cube.edges.BR.R = tempEdge.F;

      cube.centers.F = cube.centers.L;
      cube.centers.L = cube.centers.B;
      cube.centers.B = cube.centers.R;
      cube.centers.R = tempCenter;

      break;
    }

    case "E'": {
      const tempEdge = { ...cube.edges.FR };
      const tempCenter = cube.centers.F;

      cube.edges.FR.F = cube.edges.BR.R;
      cube.edges.FR.R = cube.edges.BR.B;

      cube.edges.BR.B = cube.edges.BL.L;
      cube.edges.BR.R = cube.edges.BL.B;

      cube.edges.BL.B = cube.edges.FL.L;
      cube.edges.BL.L = cube.edges.FL.F;

      cube.edges.FL.F = tempEdge.R;
      cube.edges.FL.L = tempEdge.F;

      cube.centers.F = cube.centers.R;
      cube.centers.R = cube.centers.B;
      cube.centers.B = cube.centers.L;
      cube.centers.L = tempCenter;

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
  cube: Cube,
  pieceType: "corner" | "edge" | "center",
  letter: string
) {
  if (pieceType === "corner") {
    switch (letter) {
      case "A":
        return cube.corners.UBL.U;

      case "B":
        return cube.corners.UBR.U;

      case "C":
        return cube.corners.UFR.U;

      case "D":
        return cube.corners.UFL.U;

      case "E":
        return cube.corners.UBL.L;

      case "F":
        return cube.corners.UFL.L;

      case "G":
        return cube.corners.DFL.L;

      case "H":
        return cube.corners.DBL.L;

      case "I":
        return cube.corners.UFL.F;

      case "J":
        return cube.corners.UFR.F;

      case "K":
        return cube.corners.DFR.F;

      case "L":
        return cube.corners.DFL.F;

      case "M":
        return cube.corners.UFR.R;

      case "N":
        return cube.corners.UBR.R;

      case "O":
        return cube.corners.DBR.R;

      case "P":
        return cube.corners.DFR.R;

      case "Q":
        return cube.corners.UBR.B;

      case "R":
        return cube.corners.UBL.B;

      case "S":
        return cube.corners.DBL.B;

      case "T":
        return cube.corners.DBR.B;

      case "U":
        return cube.corners.DFL.D;

      case "V":
        return cube.corners.DFR.D;

      case "W":
        return cube.corners.DBR.D;

      case "X":
        return cube.corners.DBL.D;
    }
  } else if (pieceType === "edge") {
    switch (letter) {
      case "A":
        return cube.edges.UB.U;

      case "B":
        return cube.edges.UR.U;

      case "C":
        return cube.edges.UF.U;

      case "D":
        return cube.edges.UL.U;

      case "E":
        return cube.edges.UL.L;

      case "F":
        return cube.edges.FL.L;

      case "G":
        return cube.edges.DL.L;

      case "H":
        return cube.edges.BL.L;

      case "I":
        return cube.edges.UF.F;

      case "J":
        return cube.edges.FR.F;

      case "K":
        return cube.edges.DF.F;

      case "L":
        return cube.edges.FL.F;

      case "M":
        return cube.edges.UR.R;

      case "N":
        return cube.edges.BR.R;

      case "O":
        return cube.edges.DR.R;

      case "P":
        return cube.edges.FR.R;

      case "Q":
        return cube.edges.UB.B;

      case "R":
        return cube.edges.BL.B;

      case "S":
        return cube.edges.DB.B;

      case "T":
        return cube.edges.BR.B;

      case "U":
        return cube.edges.DF.D;

      case "V":
        return cube.edges.DR.D;

      case "W":
        return cube.edges.DB.D;

      case "X":
        return cube.edges.DL.D;
    }
  } else if (pieceType === "center") {
    switch (letter) {
      case "U":
        return cube.centers.U;

      case "D":
        return cube.centers.D;

      case "F":
        return cube.centers.F;

      case "B":
        return cube.centers.B;

      case "R":
        return cube.centers.R;

      case "L":
        return cube.centers.L;
    }
  }
  throw new Error("Invalid letter");
}

export function setStickerColour(
  cube: Cube,
  pieceType: "corner" | "edge" | "center",
  letter: string,
  colour: CubeColour
) {
  if (pieceType === "corner") {
    switch (letter) {
      case "A":
        cube.corners.UBL.U = colour;
        return cube;

      case "B":
        cube.corners.UBR.U = colour;
        return cube;

      case "C":
        cube.corners.UFR.U = colour;
        return cube;

      case "D":
        cube.corners.UFL.U = colour;
        return cube;

      case "E":
        cube.corners.UBL.L = colour;
        return cube;

      case "F":
        cube.corners.UFL.L = colour;
        return cube;

      case "G":
        cube.corners.DFL.L = colour;
        return cube;

      case "H":
        cube.corners.DBL.L = colour;
        return cube;

      case "I":
        cube.corners.UFL.F = colour;
        return cube;

      case "J":
        cube.corners.UFR.F = colour;
        return cube;

      case "K":
        cube.corners.DFR.F = colour;
        return cube;

      case "L":
        cube.corners.DFL.F = colour;
        return cube;

      case "M":
        cube.corners.UFR.R = colour;
        return cube;

      case "N":
        cube.corners.UBR.R = colour;
        return cube;

      case "O":
        cube.corners.DBR.R = colour;
        return cube;

      case "P":
        cube.corners.DFR.R = colour;
        return cube;

      case "Q":
        cube.corners.UBR.B = colour;
        return cube;

      case "R":
        cube.corners.UBL.B = colour;
        return cube;

      case "S":
        cube.corners.DBL.B = colour;
        return cube;

      case "T":
        cube.corners.DBR.B = colour;
        return cube;

      case "U":
        cube.corners.DFL.D = colour;
        return cube;

      case "V":
        cube.corners.DFR.D = colour;
        return cube;

      case "W":
        cube.corners.DBR.D = colour;
        return cube;

      case "X":
        cube.corners.DBL.D = colour;
        return cube;
    }
  } else if (pieceType === "edge") {
    switch (letter) {
      case "A":
        cube.edges.UB.U = colour;
        return cube;

      case "B":
        cube.edges.UR.U = colour;
        return cube;

      case "C":
        cube.edges.UF.U = colour;
        return cube;

      case "D":
        cube.edges.UL.U = colour;
        return cube;

      case "E":
        cube.edges.UL.L = colour;
        return cube;

      case "F":
        cube.edges.FL.L = colour;
        return cube;

      case "G":
        cube.edges.DL.L = colour;
        return cube;

      case "H":
        cube.edges.BL.L = colour;
        return cube;

      case "I":
        cube.edges.UF.F = colour;
        return cube;

      case "J":
        cube.edges.FR.F = colour;
        return cube;

      case "K":
        cube.edges.DF.F = colour;
        return cube;

      case "L":
        cube.edges.FL.F = colour;
        return cube;

      case "M":
        cube.edges.UR.R = colour;
        return cube;

      case "N":
        cube.edges.BR.R = colour;
        return cube;

      case "O":
        cube.edges.DR.R = colour;
        return cube;

      case "P":
        cube.edges.FR.R = colour;
        return cube;

      case "Q":
        cube.edges.UB.B = colour;
        return cube;

      case "R":
        cube.edges.BL.B = colour;
        return cube;

      case "S":
        cube.edges.DB.B = colour;
        return cube;

      case "T":
        cube.edges.BR.B = colour;
        return cube;

      case "U":
        cube.edges.DF.D = colour;
        return cube;

      case "V":
        cube.edges.DR.D = colour;
        return cube;

      case "W":
        cube.edges.DB.D = colour;
        return cube;

      case "X":
        cube.edges.DL.D = colour;
        return cube;
    }
  } else if (pieceType === "center") {
    switch (letter) {
      case "U":
        cube.centers.U = colour;
        return cube;

      case "D":
        cube.centers.D = colour;
        return cube;

      case "F":
        cube.centers.F = colour;
        return cube;

      case "B":
        cube.centers.B = colour;
        return cube;

      case "R":
        cube.centers.R = colour;
        return cube;

      case "L":
        cube.centers.L = colour;
        return cube;
    }
  }
  throw new Error("Invalid letter");
}

export function nextStickerClockwise(
  pieceType: "corner" | "edge",
  letter: string
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
  cube: Cube,
  pieceType: "corner" | "edge",
  buffer: string,
  letter: string
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

export function printCube(cube: Cube) {
  console.log("U");
  console.log(
    getStickerColour(cube, "corner", "A"),
    getStickerColour(cube, "edge", "A"),
    getStickerColour(cube, "corner", "B")
  );
  console.log(
    getStickerColour(cube, "edge", "D"),
    getStickerColour(cube, "center", "U"),
    getStickerColour(cube, "edge", "B")
  );
  console.log(
    getStickerColour(cube, "corner", "D"),
    getStickerColour(cube, "edge", "C"),
    getStickerColour(cube, "corner", "C")
  );

  console.log("L");
  console.log(
    getStickerColour(cube, "corner", "E"),
    getStickerColour(cube, "edge", "E"),
    getStickerColour(cube, "corner", "F")
  );
  console.log(
    getStickerColour(cube, "edge", "H"),
    getStickerColour(cube, "center", "L"),
    getStickerColour(cube, "edge", "F")
  );
  console.log(
    getStickerColour(cube, "corner", "H"),
    getStickerColour(cube, "edge", "G"),
    getStickerColour(cube, "corner", "G")
  );

  console.log("F");
  console.log(
    getStickerColour(cube, "corner", "I"),
    getStickerColour(cube, "edge", "I"),
    getStickerColour(cube, "corner", "J")
  );
  console.log(
    getStickerColour(cube, "edge", "L"),
    getStickerColour(cube, "center", "F"),
    getStickerColour(cube, "edge", "J")
  );
  console.log(
    getStickerColour(cube, "corner", "L"),
    getStickerColour(cube, "edge", "K"),
    getStickerColour(cube, "corner", "K")
  );

  console.log("R");
  console.log(
    getStickerColour(cube, "corner", "M"),
    getStickerColour(cube, "edge", "M"),
    getStickerColour(cube, "corner", "N")
  );
  console.log(
    getStickerColour(cube, "edge", "P"),
    getStickerColour(cube, "center", "R"),
    getStickerColour(cube, "edge", "N")
  );
  console.log(
    getStickerColour(cube, "corner", "P"),
    getStickerColour(cube, "edge", "O"),
    getStickerColour(cube, "corner", "O")
  );

  console.log("B");
  console.log(
    getStickerColour(cube, "corner", "Q"),
    getStickerColour(cube, "edge", "Q"),
    getStickerColour(cube, "corner", "R")
  );
  console.log(
    getStickerColour(cube, "edge", "T"),
    getStickerColour(cube, "center", "B"),
    getStickerColour(cube, "edge", "R")
  );
  console.log(
    getStickerColour(cube, "corner", "T"),
    getStickerColour(cube, "edge", "S"),
    getStickerColour(cube, "corner", "S")
  );

  console.log("D");
  console.log(
    getStickerColour(cube, "corner", "U"),
    getStickerColour(cube, "edge", "U"),
    getStickerColour(cube, "corner", "V")
  );
  console.log(
    getStickerColour(cube, "edge", "X"),
    getStickerColour(cube, "center", "D"),
    getStickerColour(cube, "edge", "V")
  );
  console.log(
    getStickerColour(cube, "corner", "X"),
    getStickerColour(cube, "edge", "W"),
    getStickerColour(cube, "corner", "W")
  );
}
