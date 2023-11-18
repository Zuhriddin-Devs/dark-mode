const elCheckBox = document.querySelector('#js-checkbox');
const elBody = document.querySelector('body');

elCheckBox.addEventListener('click', () => {
    elBody.classList.toggle('dark-mode');
});

elCheckBox.addEventListener("click", function (e) {
    if (e.key === " ") {
        elBody.classList.toggle('dark-mode');
    };
});