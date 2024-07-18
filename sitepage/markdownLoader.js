document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://raw.githubusercontent.com/swangnice/test_repo/main/README.md';

    fetch(url)
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

