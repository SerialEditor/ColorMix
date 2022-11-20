let colorGroup = document.querySelector('select');
let colors = document.querySelectorAll('.color');

colorGroup.addEventListener('change', function () {
    for (let color of colors) {
        if (color.dataset.baseColor !== colorGroup.value && colorGroup.value !== 'all') {
            color.classList.add('hidden');
        } else {color.classList.remove('hidden');}
    }     
});