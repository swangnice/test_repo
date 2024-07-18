async function loadMarkdown(url) {
    try {
        // 获取 Markdown 文件内容
        const response = await fetch(url);
        const markdown = await response.text();
        // 将 Markdown 转换为 HTML
        const html = convertMarkdownToHTML(markdown);
        // 将转换后的 HTML 插入到页面中
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('加载 Markdown 文件时出错:', error);
        document.getElementById('content').innerHTML = '加载内容时出错。';
    }
}

// 自定义的 Markdown 转 HTML 转换函数
function convertMarkdownToHTML(markdown) {
    let html = markdown;

    // 转换标题
    html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // 转换粗体和斜体
    html = html.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');
    html = html.replace(/\*(.*)\*/gim, '<i>$1</i>');

    // 转换链接
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");

    // 转换无序列表
    html = html.replace(/^\s*[-+*]\s+(.*)/gim, '<ul>\n<li>$1</li>\n</ul>');
    html = html.replace(/<\/ul>\s*<ul>/gim, '');

    // 转换有序列表
    html = html.replace(/^\s*\d+\.\s+(.*)/gim, '<ol>\n<li>$1</li>\n</ol>');
    html = html.replace(/<\/ol>\s*<ol>/gim, '');

    // 转换段落
    html = html.replace(/^\s*(?!<h|<ul|<ol|<li|<b|<i|<a)(.*)\s*$/gim, '<p>$1</p>');

    return html.trim();
}
