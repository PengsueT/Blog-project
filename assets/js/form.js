document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');
    const errorElement = document.getElementById('error');

    if (blogForm) {
        blogForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            if (username && title && content) {
                errorElement.classList.add('hidden');
                const post = { username, title, content };
                savePostToLocalStorage(post);
                window.location.href = 'blog.html';
            } else {
                errorElement.classList.remove('hidden');
            }
        });
    }
    const toggleModeButton = document.getElementById('toggleMode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', () => {
            toggleMode();
        });
    }
});