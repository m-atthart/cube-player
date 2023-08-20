import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "purple" });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);
// top view
// camera.position.set(0, 8, 0);
// left view
// camera.position.set(-8, 0, 0);
// front view
// camera.position.set(0, 0, 8);
// right view
// camera.position.set(8, 0, 0);
// back view
// camera.position.set(0, 0, -8);
// bottom view
// camera.position.set(0, -8, 0);
// camera.position.set(6, 9, 15);
camera.position.set(5, 5, 7);
camera.lookAt(0, 0, 0);

const stickerGeometry = new THREE.PlaneGeometry(0.95, 0.95);
const blueMaterial = new THREE.MeshBasicMaterial({
  color: "blue",
  side: THREE.DoubleSide,
});
const redMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  side: THREE.DoubleSide,
});
const greenMaterial = new THREE.MeshBasicMaterial({
  color: "green",
  side: THREE.DoubleSide,
});
const orangeMaterial = new THREE.MeshBasicMaterial({
  color: "orange",
  side: THREE.DoubleSide,
});
const whiteMaterial = new THREE.MeshBasicMaterial({
  color: "white",
  side: THREE.DoubleSide,
});
const yellowMaterial = new THREE.MeshBasicMaterial({
  color: "yellow",
  side: THREE.DoubleSide,
});

// up face
const stickerCornerAMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerCornerAMesh.position.set(-1, 1.51, -1);
stickerCornerAMesh.rotation.x = Math.PI / 2;

const stickerCornerBMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerCornerBMesh.position.set(1, 1.51, -1);
stickerCornerBMesh.rotation.x = Math.PI / 2;

const stickerCornerCMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerCornerCMesh.position.set(1, 1.51, 1);
stickerCornerCMesh.rotation.x = Math.PI / 2;

const stickerCornerDMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerCornerDMesh.position.set(-1, 1.51, 1);
stickerCornerDMesh.rotation.x = Math.PI / 2;

const stickerEdgeAMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerEdgeAMesh.position.set(0, 1.51, -1);
stickerEdgeAMesh.rotation.x = Math.PI / 2;

const stickerEdgeBMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerEdgeBMesh.position.set(1, 1.51, 0);
stickerEdgeBMesh.rotation.x = Math.PI / 2;

const stickerEdgeCMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerEdgeCMesh.position.set(0, 1.51, 1);
stickerEdgeCMesh.rotation.x = Math.PI / 2;

const stickerEdgeDMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerEdgeDMesh.position.set(-1, 1.51, 0);
stickerEdgeDMesh.rotation.x = Math.PI / 2;

const stickerCenterUMesh = new THREE.Mesh(stickerGeometry, blueMaterial);
stickerCenterUMesh.position.set(0, 1.51, 0);
stickerCenterUMesh.rotation.x = Math.PI / 2;

// left face
const stickerCornerEMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerCornerEMesh.position.set(-1.51, 1, -1);
stickerCornerEMesh.rotation.y = Math.PI / 2;

const stickerCornerFMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerCornerFMesh.position.set(-1.51, 1, 1);
stickerCornerFMesh.rotation.y = Math.PI / 2;

const stickerCornerGMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerCornerGMesh.position.set(-1.51, -1, 1);
stickerCornerGMesh.rotation.y = Math.PI / 2;

const stickerCornerHMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerCornerHMesh.position.set(-1.51, -1, -1);
stickerCornerHMesh.rotation.y = Math.PI / 2;

const stickerEdgeEMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerEdgeEMesh.position.set(-1.51, 1, 0);
stickerEdgeEMesh.rotation.y = Math.PI / 2;

const stickerEdgeFMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerEdgeFMesh.position.set(-1.51, 0, 1);
stickerEdgeFMesh.rotation.y = Math.PI / 2;

const stickerEdgeGMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerEdgeGMesh.position.set(-1.51, -1, 0);
stickerEdgeGMesh.rotation.y = Math.PI / 2;

const stickerEdgeHMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerEdgeHMesh.position.set(-1.51, 0, -1);
stickerEdgeHMesh.rotation.y = Math.PI / 2;

const stickerCenterLMesh = new THREE.Mesh(stickerGeometry, orangeMaterial);
stickerCenterLMesh.position.set(-1.51, 0, 0);
stickerCenterLMesh.rotation.y = Math.PI / 2;

// front face
const stickerCornerIMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerCornerIMesh.position.set(-1, 1, 1.51);

const stickerCornerJMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerCornerJMesh.position.set(1, 1, 1.51);

const stickerCornerKMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerCornerKMesh.position.set(1, -1, 1.51);

const stickerCornerLMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerCornerLMesh.position.set(-1, -1, 1.51);

const stickerEdgeIMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerEdgeIMesh.position.set(0, 1, 1.51);

const stickerEdgeJMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerEdgeJMesh.position.set(1, 0, 1.51);

const stickerEdgeKMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerEdgeKMesh.position.set(0, -1, 1.51);

const stickerEdgeLMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerEdgeLMesh.position.set(-1, 0, 1.51);

const stickerCenterFMesh = new THREE.Mesh(stickerGeometry, whiteMaterial);
stickerCenterFMesh.position.set(0, 0, 1.51);

// right face
const stickerCornerMMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerCornerMMesh.position.set(1.51, 1, 1);
stickerCornerMMesh.rotation.y = Math.PI / 2;

const stickerCornerNMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerCornerNMesh.position.set(1.51, 1, -1);
stickerCornerNMesh.rotation.y = Math.PI / 2;

const stickerCornerOMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerCornerOMesh.position.set(1.51, -1, -1);
stickerCornerOMesh.rotation.y = Math.PI / 2;

const stickerCornerPMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerCornerPMesh.position.set(1.51, -1, 1);
stickerCornerPMesh.rotation.y = Math.PI / 2;

const stickerEdgeMMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerEdgeMMesh.position.set(1.51, 1, 0);
stickerEdgeMMesh.rotation.y = Math.PI / 2;

const stickerEdgeNMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerEdgeNMesh.position.set(1.51, 0, -1);
stickerEdgeNMesh.rotation.y = Math.PI / 2;

const stickerEdgeOMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerEdgeOMesh.position.set(1.51, -1, 0);
stickerEdgeOMesh.rotation.y = Math.PI / 2;

const stickerEdgePMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerEdgePMesh.position.set(1.51, 0, 1);
stickerEdgePMesh.rotation.y = Math.PI / 2;

const stickerCenterRMesh = new THREE.Mesh(stickerGeometry, redMaterial);
stickerCenterRMesh.position.set(1.51, 0, 0);
stickerCenterRMesh.rotation.y = Math.PI / 2;

// back face
const stickerCornerQMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerCornerQMesh.position.set(1, 1, -1.51);

const stickerCornerRMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerCornerRMesh.position.set(-1, 1, -1.51);

const stickerCornerSMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerCornerSMesh.position.set(-1, -1, -1.51);

const stickerCornerTMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerCornerTMesh.position.set(1, -1, -1.51);

const stickerEdgeQMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerEdgeQMesh.position.set(0, 1, -1.51);

const stickerEdgeRMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerEdgeRMesh.position.set(-1, 0, -1.51);

const stickerEdgeSMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerEdgeSMesh.position.set(0, -1, -1.51);

const stickerEdgeTMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerEdgeTMesh.position.set(1, 0, -1.51);

const stickerCenterBMesh = new THREE.Mesh(stickerGeometry, yellowMaterial);
stickerCenterBMesh.position.set(0, 0, -1.51);

// down face
const stickerCornerUMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerCornerUMesh.position.set(-1, -1.51, 1);
stickerCornerUMesh.rotation.x = Math.PI / 2;

const stickerCornerVMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerCornerVMesh.position.set(1, -1.51, 1);
stickerCornerVMesh.rotation.x = Math.PI / 2;

const stickerCornerWMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerCornerWMesh.position.set(1, -1.51, -1);
stickerCornerWMesh.rotation.x = Math.PI / 2;

const stickerCornerXMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerCornerXMesh.position.set(-1, -1.51, -1);
stickerCornerXMesh.rotation.x = Math.PI / 2;

const stickerEdgeUMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerEdgeUMesh.position.set(0, -1.51, 1);
stickerEdgeUMesh.rotation.x = Math.PI / 2;

const stickerEdgeVMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerEdgeVMesh.position.set(1, -1.51, 0);
stickerEdgeVMesh.rotation.x = Math.PI / 2;

const stickerEdgeWMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerEdgeWMesh.position.set(0, -1.51, -1);
stickerEdgeWMesh.rotation.x = Math.PI / 2;

const stickerEdgeXMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerEdgeXMesh.position.set(-1, -1.51, 0);
stickerEdgeXMesh.rotation.x = Math.PI / 2;

const stickerCenterDMesh = new THREE.Mesh(stickerGeometry, greenMaterial);
stickerCenterDMesh.position.set(0, -1.51, 0);
stickerCenterDMesh.rotation.x = Math.PI / 2;

scene.add(stickerCornerAMesh);
scene.add(stickerCornerBMesh);
scene.add(stickerCornerCMesh);
scene.add(stickerCornerDMesh);
scene.add(stickerEdgeAMesh);
scene.add(stickerEdgeBMesh);
scene.add(stickerEdgeCMesh);
scene.add(stickerEdgeDMesh);
scene.add(stickerCenterUMesh);

scene.add(stickerCornerEMesh);
scene.add(stickerCornerFMesh);
scene.add(stickerCornerGMesh);
scene.add(stickerCornerHMesh);
scene.add(stickerEdgeEMesh);
scene.add(stickerEdgeFMesh);
scene.add(stickerEdgeGMesh);
scene.add(stickerEdgeHMesh);
scene.add(stickerCenterLMesh);

scene.add(stickerCornerIMesh);
scene.add(stickerCornerJMesh);
scene.add(stickerCornerKMesh);
scene.add(stickerCornerLMesh);
scene.add(stickerEdgeIMesh);
scene.add(stickerEdgeJMesh);
scene.add(stickerEdgeKMesh);
scene.add(stickerEdgeLMesh);
scene.add(stickerCenterFMesh);

scene.add(stickerCornerMMesh);
scene.add(stickerCornerNMesh);
scene.add(stickerCornerOMesh);
scene.add(stickerCornerPMesh);
scene.add(stickerEdgeMMesh);
scene.add(stickerEdgeNMesh);
scene.add(stickerEdgeOMesh);
scene.add(stickerEdgePMesh);
scene.add(stickerCenterRMesh);

scene.add(stickerCornerQMesh);
scene.add(stickerCornerRMesh);
scene.add(stickerCornerSMesh);
scene.add(stickerCornerTMesh);
scene.add(stickerEdgeQMesh);
scene.add(stickerEdgeRMesh);
scene.add(stickerEdgeSMesh);
scene.add(stickerEdgeTMesh);
scene.add(stickerCenterBMesh);

scene.add(stickerCornerUMesh);
scene.add(stickerCornerVMesh);
scene.add(stickerCornerWMesh);
scene.add(stickerCornerXMesh);
scene.add(stickerEdgeUMesh);
scene.add(stickerEdgeVMesh);
scene.add(stickerEdgeWMesh);
scene.add(stickerEdgeXMesh);
scene.add(stickerCenterDMesh);

const solvedCube = {
  corners: {
    UBL: {
      U: stickerCornerAMesh,
      B: stickerCornerRMesh,
      L: stickerCornerEMesh,
    },
    UBR: {
      U: stickerCornerBMesh,
      B: stickerCornerQMesh,
      R: stickerCornerNMesh,
    },
    UFR: {
      U: stickerCornerCMesh,
      F: stickerCornerJMesh,
      R: stickerCornerMMesh,
    },
    UFL: {
      U: stickerCornerDMesh,
      F: stickerCornerIMesh,
      L: stickerCornerFMesh,
    },
    DFL: {
      D: stickerCornerUMesh,
      F: stickerCornerLMesh,
      L: stickerCornerGMesh,
    },
    DFR: {
      D: stickerCornerVMesh,
      F: stickerCornerKMesh,
      R: stickerCornerPMesh,
    },
    DBR: {
      D: stickerCornerWMesh,
      B: stickerCornerTMesh,
      R: stickerCornerOMesh,
    },
    DBL: {
      D: stickerCornerXMesh,
      B: stickerCornerSMesh,
      L: stickerCornerHMesh,
    },
  },
  edges: {
    UB: {
      U: stickerEdgeAMesh,
      B: stickerEdgeQMesh,
    },
    UR: {
      U: stickerEdgeBMesh,
      R: stickerEdgeMMesh,
    },
    UF: {
      U: stickerEdgeCMesh,
      F: stickerEdgeIMesh,
    },
    UL: {
      U: stickerEdgeDMesh,
      L: stickerEdgeEMesh,
    },
    FL: {
      F: stickerEdgeLMesh,
      L: stickerEdgeFMesh,
    },
    FR: {
      F: stickerEdgeJMesh,
      R: stickerEdgePMesh,
    },
    BR: {
      B: stickerEdgeTMesh,
      R: stickerEdgeNMesh,
    },
    BL: {
      B: stickerEdgeRMesh,
      L: stickerEdgeHMesh,
    },
    DF: {
      D: stickerEdgeUMesh,
      F: stickerEdgeKMesh,
    },
    DR: {
      D: stickerEdgeVMesh,
      R: stickerEdgeOMesh,
    },
    DB: {
      D: stickerEdgeWMesh,
      B: stickerEdgeSMesh,
    },
    DL: {
      D: stickerEdgeXMesh,
      L: stickerEdgeGMesh,
    },
  },
  centers: {
    U: stickerCenterUMesh,
    D: stickerCenterDMesh,
    F: stickerCenterFMesh,
    B: stickerCenterBMesh,
    R: stickerCenterRMesh,
    L: stickerCenterLMesh,
  },
};

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
