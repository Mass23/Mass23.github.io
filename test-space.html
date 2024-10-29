<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Room with Videos</title>
    <style>
        #renderCanvas {
            width: 100%;
            height: 100%;
            touch-action: none;
        }
    </style>
</head>
<body>
    <canvas id="renderCanvas"></canvas> <!-- Canvas for Babylon.js -->
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
    <script src="https://cdn.babylonjs.com/babylonjs.loaders.js"></script>
    <script>
        // Get the canvas element
        const canvas = document.getElementById("renderCanvas");
        const engine = new BABYLON.Engine(canvas, true);

        // Create the scene
        const createScene = function () {
            const scene = new BABYLON.Scene(engine);
            
            // Create a camera
            const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 10, new BABYLON.Vector3(0, 2.5, 0), scene);
            camera.attachControl(canvas, true);

            // Create light
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

            // Create the room
            const roomWidth = 8;
            const roomHeight = 5;
            const roomLength = 10;
            const roomMaterial = new BABYLON.StandardMaterial("roomMaterial", scene);
            roomMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
            const room = BABYLON.MeshBuilder.CreateBox("room", { width: roomWidth, height: roomHeight, depth: roomLength }, scene);
            room.material = roomMaterial;
            room.position.y = roomHeight / 2; // Center the room on the Y-axis

            // Create video walls on two shorter sides
            const createVideoWall = function (url, position) {
                const videoTexture = new BABYLON.VideoTexture("video", [url], scene, true, true);
                const videoPlane = BABYLON.MeshBuilder.CreatePlane("videoPlane", { width: roomWidth, height: roomHeight }, scene);
                videoPlane.material = new BABYLON.StandardMaterial("videoMaterial", scene);
                videoPlane.material.diffuseTexture = videoTexture;
                videoPlane.position = position;
                videoPlane.rotation.y = Math.PI; // Face inwards
            };

            // Create video walls at the shorter sides of the room
            createVideoWall("https://www.youtube.com/embed/NwCyP3h2nyA?autoplay=1", new BABYLON.Vector3(-roomWidth / 2, roomHeight / 2, -roomLength / 2)); // Left wall
            createVideoWall("https://www.youtube.com/embed/NwCyP3h2nyA?autoplay=1", new BABYLON.Vector3(roomWidth / 2, roomHeight / 2, -roomLength / 2)); // Right wall

            return scene;
        };

        const scene = createScene();

        // Render loop
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Resize event
        window.addEventListener("resize", function () {
            engine.resize();
        });
    </script>
</body>
</html>
