document.addEventListener('DOMContentLoaded', function () {
    const message = document.querySelector('.message');
    message.style.opacity = 0;

    setTimeout(function () {
        message.style.transition = 'opacity 2s';
        message.style.opacity = 1;
    }, 500);
});
