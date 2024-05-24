function savePostToLocalStorage(post) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPostsForm() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

function clearPosts() {
    localStorage.removeItem('posts');
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}