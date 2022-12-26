let contrastSettingField = document.querySelector('.contrast-setting__field');
let contrastReset = document.querySelector('.contrast-setting__button--reset');

for (let color of colors) {
    color.addEventListener('click', function () {
        color.style.backgroundColor = contrastSettingField.value;
    });
}

contrastReset.addEventListener('click', function () {
    for (let color of colors) {
        color.removeAttribute('style');
    }
});