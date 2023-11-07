const elSlider = document.querySelector('#js-slider');
const elBody = document.querySelector('body');

elSlider.addEventListener('click', () => {
    elBody.classList.toggle('dark-mode');
});