document.addEventListener("DOMContentLoaded", function () {
    const bannerTitle = document.querySelector('.title');
    const titleSwarmContainer = document.getElementById('titleSwarm');

    bannerTitle.addEventListener('mouseenter', () => {
        createTitleSwarm(bannerTitle);
        replaceText(bannerTitle, 'Massimo Bourquin');
    });

    bannerTitle.addEventListener('mouseleave', () => {
        setTimeout(() => { clearTitleSwarm(); }, 0);
        setTimeout(() => { restoreText(bannerTitle); }, 0);
    });

    // Function to run every 5 seconds (specific to smartphones)
    function runOnSmartphone() {
        console.log("Running this code every 5 seconds on smartphones.");
        replaceText(bannerTitle, 'Massimo Bourquin');
        setTimeout(() => { restoreText(bannerTitle); }, 0);
    }

    // Check if the device is a smartphone using max-width media query
    if (window.matchMedia("(max-width: 600px)").matches) {
        // Run the function every 5 seconds (5000ms) only on smartphones
        setInterval(runOnSmartphone, 5000);
    }
});

function createTitleSwarm(mainTitle) {
    const titleSwarmContainer = document.getElementById('titleSwarm');
    const mainTitleRect = mainTitle.getBoundingClientRect();
    const startHeight = mainTitleRect.bottom + 20; // Adjust start height

    const numTitles = 10; // Adjust number of titles
    const titleHeight = 40; // Adjust title height
    const lineSpacing = 5; // Adjust line spacing
    const delay = 40;

    for (let i = 0; i < numTitles; i++) {
        setTimeout(() => {
            const title = document.createElement('h1');
            title.textContent = 'Massimo Bourquin';
            title.classList.add('title-swarm');
            title.style.position = 'absolute';
            title.style.top = `${startHeight + (i * (titleHeight + lineSpacing))}px`;
            title.style.left = '30px'; // Align 30px from left
            title.style.opacity = 0.5 - (i * 0.05);
            titleSwarmContainer.appendChild(title);

            const line = document.createElement('div');
            line.classList.add('line');
            line.style.position = 'absolute';
            line.style.top = `${startHeight + (i * (titleHeight + lineSpacing)) + (titleHeight / 2)}px`;
            line.style.left = '0'; // Align with the left edge of the container
            line.style.width = `${mainTitleRect.width}px`;
            titleSwarmContainer.appendChild(line);
        }, i * delay);
    }
}



function clearTitleSwarm() {
    const swarmTitles = document.querySelectorAll(".title-swarm");
    let delay = 0; // Initial delay

    swarmTitles.forEach((title, index) => {
        setTimeout(() => {
            title.remove();
            if (index === swarmTitles.length - 1) {
                setTimeout(() => {
                    const remainingTitles = document.querySelectorAll(".title-swarm");
                    remainingTitles.forEach((remainingTitle) => {
                        remainingTitle.remove();
                    });
                }, 1000); // Adjust the delay as needed
            }
        }, delay);
        delay += 100; // Increment delay for next iteration
    });
}

function replaceText(element, finalText) {
    const originalText = element.textContent;
    const iterations = 10;
    const delay = 50; // Adjust delay between iterations in milliseconds

    // Define a function to generate a string for replacement
    function generateRandomASCII(length) {
        let result = '';
        const characters = 'MmAaSsIiOoBbUuRrQqNn-_/*';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Replace the title text multiple times with generated strings
    let counter = 0;
    const replaceInterval = setInterval(() => {
        const replacementText = generateRandomASCII(12);
        element.textContent = replacementText;
        counter++;

        // Stop after specified number of iterations
        if (counter === iterations) {
            clearInterval(replaceInterval);
            // Settle on the final text after replacements
            setTimeout(() => {
                element.textContent = finalText;
            }, delay);
        }
    }, delay);

    setTimeout(() => { element.textContent = '■■■■■■■ ■■■■■■■■'; }, 1000);
}

function restoreText(element) {
    element.textContent = '■■■■■■■ ■■■■■■■■';
}
