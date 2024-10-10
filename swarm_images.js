document.addEventListener("DOMContentLoaded", function () {
    const bannerElements = document.getElementsByClassName("banner-element");
    const imageSwarmContainer = document.getElementById("imageSwarm");

    for (const element of bannerElements) {
      element.addEventListener("mouseover", () => {
        document.addEventListener("mousemove", createImageSwarm);
      });

      element.addEventListener("mouseout", () => {
        document.removeEventListener("mousemove", createImageSwarm);
        clearImageSwarm();
      });
    }

    function createImageSwarm(event) {
      const image = new Image();
      image.src = "images/background.jpeg";
      image.classList.add("swarm-image");
      image.style.position = "absolute";

      // Reduce the size of the images
      const imageSize = Math.floor(Math.random() * 40) + 10;
      image.width = imageSize;
      image.height = imageSize;

      // Randomize their position in space around the cursor
      const randomX = event.pageX + Math.floor(Math.random() * 100) - 50;
      const randomY = event.pageY + Math.floor(Math.random() * 100) - 50;
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";

      imageSwarmContainer.appendChild(image);

      // Make them fade out
      setTimeout(() => {
        image.style.opacity = "0";
      }, 500);

      // Remove the image from the DOM after fading out
      setTimeout(() => {
        image.remove();
      }, 1000 + 500); // 1000ms delay + 500ms fade out
    }

    function clearImageSwarm() {
      const swarmImages = document.querySelectorAll(".swarm-image");
      swarmImages.forEach((image) => image.remove());
    }
  });
