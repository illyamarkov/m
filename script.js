// Get all popup windows
const windows = document.querySelectorAll('.window');
const interactButton = document.querySelector('.interact');


var cimg = false;


var totalWindows = 0;
var wins = [];

windows.forEach((window) => {
    totalWindows += 1;
    wins.push(window)
});

console.log(wins);

// Loop through each window and add event listeners
windows.forEach((window) => {
  // Get the title bar and the close button
  const titleBar = window.querySelector('.title-bar');
  const closeButton = window.querySelector('.close-button');

  // Initialize variables for storing the initial position and the offset
  let initialX, initialY, offsetX, offsetY;

  // Add event listener for mousedown on the title bar
  titleBar.addEventListener('mousedown', (e) => {
    // Store the initial position and the offset
    initialX = e.clientX;
    initialY = e.clientY;
    offsetX = window.offsetLeft;
    offsetY = window.offsetTop;

    tempTW = totalWindows;

    tempi = 0;

    wins.forEach((i) => {
        if (window === i){
            temp = wins[tempi];
            wins.splice(tempi, 1);
            wins.push(temp);
        }
        tempi += 1;
    });

    tempi = 1;

    wins.forEach((window) => {
        window.style.zIndex = tempi;
        tempi+=1
    });

    window.style.zIndex =  totalWindows;


    // Add event  listeners for mousemove and mouseup on the document
    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', releaseWindow);
  });

  // Function for dragging the window
  function dragWindow(e) {
    // Calculate the new position of the window
    const newX = e.clientX - initialX + offsetX;
    const newY = e.clientY - initialY + offsetY;

    // Update the position of the window
    window.style.left = newX + 'px';
    window.style.top = newY + 'px';

  }

  // Function for releasing the window
  function releaseWindow() {
    // Remove the event listeners for mousemove and mouseup on the document
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', releaseWindow);

  }

  // Add event listener for click on the close button
  closeButton.addEventListener('click', () => {
    // Remove the window from the DOM
    window.remove();
  });

  interactButton.addEventListener('click', () => {
    // Remove the window from the DOM
    if (cimg === false){
        interactButton.closest('.window').querySelector('img').src = "src/!.png";
        interactButton.closest('.window').querySelector('.title').textContent = "!"
        interactButton.textContent = "!";
        cimg = true;
    }
    else {
        interactButton.closest('.window').querySelector('img').src = "src/SHEPHERD.png";
        interactButton.textContent = "?";
        interactButton.closest('.window').querySelector('.title').textContent = "REJOICE!"
        cimg = false;
    }
  });



});