const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValueDisplay = document.getElementById('redValue');
const greenValueDisplay = document.getElementById('greenValue');
const blueValueDisplay = document.getElementById('blueValue');
const rgbValueDisplay = document.getElementById('rgbValue');

function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    redValueDisplay.textContent = red;
    greenValueDisplay.textContent = green;
    blueValueDisplay.textContent = blue;

    rgbValueDisplay.textContent = `RGB(${red}, ${green}, ${blue})`;
}

redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

updateBackgroundColor();
