// header.js
function loadHeader() {
    const headerHTML = `
    <header>
        <h1>SWangNice</h1>
    </header>
    <nav>
        <ul>
            <li><a href="https://swangnice.github.io/">Home</a></li>
            <li><a href="https://swangnice.github.io/#blog">Projects</a></li>
            <li><a href="https://swangnice.github.io/#contact">Contact</a></li>
            <li><a href="https://swangnice.github.io/#about">About Me</a></li>
        </ul>
    </nav>
    `;

    document.getElementById('header-container').innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);
