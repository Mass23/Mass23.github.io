import * as THREE from 'https://cdn.jsdelivr.net/gh/Mass23/Mass23.github.io/javascript/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://cdn.jsdelivr.net/gh/Mass23/Mass23.github.io/javascript/CSS3Drenderer.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// CSS3D Renderer for videos
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
document.getElementById('container').appendChild(cssRenderer.domElement);

// Create a rectangular room
const roomWidth = 8;
const roomHeight = 5;
const roomLength = 10;

// Create the room's geometry and material
const geometry = new THREE.BoxGeometry(roomWidth, roomHeight, roomLength);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
const room = new THREE.Mesh(geometry, material);
scene.add(room);

// Position the camera inside the room
camera.position.set(0, 2, 0); // Start slightly above the center

// Function to create a video on a wall
function createVideoWall(videoUrl, position) {
    const videoElement = document.createElement('iframe');
    videoElement.src = videoUrl;
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.border = 'none';

    const videoObject = new CSS3DObject(videoElement);
    videoObject.position.copy(position);
    videoObject.rotation.y = Math.PI; // Face inwards
    scene.add(videoObject);
}

// Create video walls on the two shorter sides of the room
createVideoWall('https://www.youtube.com/embed/NwCyP3h2nyA?si=iYkdzzq5n_8WBhER', new THREE.Vector3(-roomWidth / 2, 0, -roomLength / 2)); // Left wall
createVideoWall('https://www.youtube.com/embed/NwCyP3h2nyA?si=iYkdzzq5n_8WBhER', new THREE.Vector3(roomWidth / 2, 0, -roomLength / 2)); // Right wall

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    cssRenderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Movement controls
const controls = new THREE.PointerLockControls(camera, document.body);
document.body.appendChild(controls.getElement());
document.addEventListener('click', () => {
    controls.lock();
});

// Create a ground for reference
const groundGeometry = new THREE.PlaneGeometry(roomWidth, roomLength);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
}
animate();
