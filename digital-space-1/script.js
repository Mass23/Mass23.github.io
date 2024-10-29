import \* as THREE from 'https://cdn.jsdelivr.net/gh/Mass23/Mass23.github.io/javascript/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://cdn.jsdelivr.net/gh/Mass23/Mass23.github.io/javascript/CSS3Drenderer.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// CSS3D Renderer
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
document.getElementById('container').appendChild(cssRenderer.domElement);

// Cube geometry
const cubeSize = 2;
const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add videos to cube sides
const videoUrls = [
    'https://www.youtube.com/embed/NwCyP3h2nyA?rel=0&autoplay=1', // Front
    'https://www.youtube.com/embed/NwCyP3h2nyA?rel=0&autoplay=1', // Back
    'https://www.youtube.com/embed/NwCyP3h2nyA?rel=0&autoplay=1', // Left
    'https://www.youtube.com/embed/NwCyP3h2nyA?rel=0&autoplay=1', // Right
    'https://www.youtube.com/embed/NwCyP3h2nyA?rel=0&autoplay=1', // Top
    'https://www.youtube.com/embed/NwCyP3h2nyA?rel=0&autoplay=1'  // Bottom
];

// Create iframes for each video and place them on the cube sides
videoUrls.forEach((url, index) => {
    const element = document.createElement('iframe');
    element.src = url;
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.border = 'none';
    element.allowFullscreen = true;

    const cssObject = new CSS3DObject(element);
    cssObject.position.set(0, 0, 0);
    cssObject.rotation.set(0, Math.PI * (index % 4) / 2, 0);
    cssObject.scale.set(cubeSize, cubeSize, cubeSize);

    cube.add(cssObject);
});

// Set camera position
camera.position.z = 5;

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
};

animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    cssRenderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
