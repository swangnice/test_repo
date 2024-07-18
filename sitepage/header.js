// header.js
function loadHeader() {
    const headerHTML = `
    <header>
        <h1>欢迎来到我的博客</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#about">关于我</a></li>
            <li><a href="#blog">博客文章</a></li>
            <li><a href="#contact">联系方式</a></li>
        </ul>
    </nav>
    `;

    document.getElementById('header-container').innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);
