const sidebar = document.querySelector('.sidebar');
const togleBtn = document.querySelector('.toggle-btn');

togleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});