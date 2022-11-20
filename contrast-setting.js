let contrastColorField = document.querySelector('#contrast-color-field');

for (let color of colors) {
    color.addEventListener('click', function () {
        color.classList.toggle('contrast-setting');
    });
}