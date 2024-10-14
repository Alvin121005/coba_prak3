// Get the elements by their IDs
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValueDisplay = document.getElementById('redValue');
const greenValueDisplay = document.getElementById('greenValue');
const blueValueDisplay = document.getElementById('blueValue');
const rgbValueDisplay = document.getElementById('rgbValue');

// Function to update the background color and displayed values
function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Update the background color of the body
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Update the displayed RGB values
    redValueDisplay.textContent = red;
    greenValueDisplay.textContent = green;
    blueValueDisplay.textContent = blue;

    // Update the displayed RGB string
    rgbValueDisplay.textContent = `RGB(${red}, ${green}, ${blue})`;
}

// Add event listeners to update the color when the slider values change
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

// Initialize the background color on page load
updateBackgroundColor();
