document.addEventListener('DOMContentLoaded', function () {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://raw.githubusercontent.com/DorianDarko/claude-engineer/README.md';  // 这里需要修正为正确的 raw URL

    fetch(proxy + url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(markdown => {
            document.getElementById('content').innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            console.error('Error fetching markdown:', error);
            document.getElementById('content').innerHTML = '<p>Error loading content.</p>';
        });
});

