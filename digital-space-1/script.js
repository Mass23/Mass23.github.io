import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.151.3/build/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://cdn.jsdelivr.net/npm/three@0.151.3/examples/jsm/renderers/CSS3DRenderer.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.151.3/examples/jsm/controls/OrbitControls.js';

// Create the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create CSS3D renderer
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
document.getElementById('container').appendChild(cssRenderer.domElement);

// Create the cube
const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create CSS3D objects for videos
const video1 = document.createElement('iframe');
video1.className = 'iframe-container';
video1.src = "https://www.youtube.com/embed/NwCyP3h2nyA?si=iYkdzzq5n_8WBhER";
video1.width = "560";
video1.height = "315";
video1.frameBorder = "0";
video1.allowFullscreen = true;

const video2 = document.createElement('iframe');
video2.className = 'iframe-container second';
video2.src = "https://www.youtube.com/embed/NwCyP3h2nyA?si=iYkdzzq5n_8WBhER";
video2.width = "560";
video2.height = "315";
video2.frameBorder = "0";
video2.allowFullscreen = true;

// Create CSS3DObjects
const video1Object = new CSS3DObject(video1);
video1Object.position.set(2, 0, 0); // Position on the right side of the cube
scene.add(video1Object);

const video2Object = new CSS3DObject(video2);
video2Object.position.set(-2, 0, 0); // Position on the left side of the cube
scene.add(video2Object);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; // Rotate the cube for demonstration
    cube.rotation.y += 0.01;
    
    cssRenderer.render(scene, camera); // Render CSS3D elements
    renderer.render(scene, camera); // Render the 3D scene
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
});
