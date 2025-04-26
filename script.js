// Проверяем сохраненную тему при загрузке
let Them = localStorage.getItem('theme');
if (Them) {
    document.body.className = Them;
}

function toggleTheme() {
    // Определяем текущую тему
    let currentTheme = document.body.className;
    // Выбираем противоположную тему
    if (currentTheme === 'light') {
        let newTheme = 'dark'
    }
}