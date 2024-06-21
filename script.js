document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const dashboardMessage = document.querySelector('main p');

    if (username) {
        localStorage.setItem('username', username.value);
    }

    if (dashboardMessage) {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            dashboardMessage.textContent = `Bienvenue, ${storedUsername} !`;
        }
    }
});
