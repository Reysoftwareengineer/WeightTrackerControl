document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');  // Ambil nama dari localStorage
    if (userName) {
        document.getElementById('greeting').textContent = `Hai, ${userName}!`;
    }
});
