document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // Check if user previously saved a theme preference; default to 'dark' if none exists
    const savedTheme = localStorage.getItem('userTheme') || 'dark';

    // Apply the theme on initial load
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('userTheme', newTheme);
        
        // Update button icon (Sun for switching to light, Moon for switching to dark)
        themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
});