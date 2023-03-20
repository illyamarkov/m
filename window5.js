
// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(280, 280);
document.querySelector('#window5 .content').appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 10;
controls.enablePan = false;


// Set the pixel ratio to create a pixelated effect
renderer.setPixelRatio(0.25);
renderer.domElement.style.imageRendering = 'pixelated';
renderer.domElement.style.msInterpolationMode = 'nearest-neighbor';

// Create a TORUS mesh
const geometry = new THREE.TorusGeometry(1, 0.125, 10, 32);
const material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });      
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a TORUS mesh
const geometryT = new THREE.TorusGeometry(0.5, 0.125, 10, 32);
const materialT = new THREE.MeshPhongMaterial({ color: 0xFF0000 });      
const T = new THREE.Mesh(geometryT, materialT);
scene.add(T);

// Create a TORUS mesh
const geometryT2 = new THREE.TorusGeometry(1.5, 0.125, 10, 32);
const materialT2 = new THREE.MeshPhongMaterial({ color: 0xFF0000 });      
const T2 = new THREE.Mesh(geometryT2, materialT2);
scene.add(T2);

// Create a SPHERE mesh
const geometryS = new THREE.SphereGeometry(0.25, 10, 32);
const materialS = new THREE.MeshPhongMaterial({ color: 0xFFFFFF,
emissive: 0xff0000, // set emissive color to red
emissiveIntensity: 1 // set emissive intensity

});      
const sphere = new THREE.Mesh(geometryS, materialS);
scene.add(sphere);

// Add a directional light to the scene
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(0, 1, 1);
scene.add(light);

const light2 = new THREE.DirectionalLight(0xff0000, 1);
light.position.set(0, 0, 0);
scene.add(light2);

// Adjust the camera position
camera.position.z = 2;

// Create an instance of OrbitControls

// Animate the cube mesh
function animate() {
requestAnimationFrame(animate);
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
cube.rotation.z += 0.01;

T.rotation.x -= 0.02;
T.rotation.y -= 0.02;
T.rotation.z -= 0.02;

T2.rotation.x -= 0.005;
T2.rotation.y -= 0.005;
T2.rotation.z -= 0.005;

// Update the controls
controls.update();

renderer.render(scene, camera);
}
animate();