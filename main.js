import './assets/style/style.css'

const canvas = document.getElementById("render-canvas");

// Creating the Babylon.js engine instance
const engine = new BABYLON.Engine(canvas);

// Creating the scene
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);

// Creating a camera
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);

// Creating the light
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);

// Creating the box
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0.1);
box.material = boxMaterial;

// Creating a rendering loop to make the scene visible
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);