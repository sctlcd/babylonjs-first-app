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
boxMaterial.emissiveColor = new BABYLON.Color3.FromHexString('#a61308');
box.material = boxMaterial;

// Creating the torus
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;

const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3.FromHexString('#2400ab');
torus.material = torusMaterial;

// Creating the cylinder
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3.FromHexString('#e6d307');
cylinder.material = cylinderMaterial;

let t = 0;

// Creating a rendering loop to make the scene visible
function renderLoop() {
  scene.render();
  t -= 0.01;
  box.rotation.y = t*3;
  torus.scaling.z = Math.abs(Math.sin(t*2.5))+0.8;
  cylinder.position.y = Math.sin(t*5);
}
engine.runRenderLoop(renderLoop);