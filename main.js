// Функція для відкриття модального вікна з відео
function openModal() {
    document.getElementById('video-modal').style.display = 'block';
}

// Функція для закриття модального вікна
function closeModal() {
    document.getElementById('video-modal').style.display = 'none';
}

// Додаємо події для кнопки "Подивитися відео" та для закриття модального вікна
document.addEventListener('DOMContentLoaded', () => {
    const openVideoBtn = document.getElementById('open-video-btn');
    const closeVideoBtn = document.getElementById('close-video');

    openVideoBtn.addEventListener('click', openModal); // Відкриваємо модальне вікно при натисканні
    closeVideoBtn.addEventListener('click', closeModal); // Закриваємо модальне вікно при натисканні на хрестик

    // Закриття модального вікна при натисканні за межами вікна
    window.onclick = function(event) {
        const modal = document.getElementById('video-modal');
        if (event.target === modal) {
            closeModal();
        }
    }
});
