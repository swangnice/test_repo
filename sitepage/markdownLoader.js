document.addEventListener('DOMContentLoaded', function () {
    fetch('https://github.com/Doriandarko/claude-engineer/README.md')
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
