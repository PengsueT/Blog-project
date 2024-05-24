document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const posts = loadPostsForm();

    if (postsContainer) {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Author:</stong> ${post.username}</p>`;
            postsContainer.appendChild(postElement);
        });
    }

    const toggleModeButton = document.getElementById('toggleMode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', () => {
            toggleMode();
        });
    }

    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});