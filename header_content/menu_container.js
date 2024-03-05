document.addEventListener('DOMContentLoaded', function() {
    // Build the menuHtml string dynamically
    var menuHtml = '<div class="menu-container"><ul>';
    menuItems.forEach(function(item) {
        menuHtml += `<li><button><a href="${item.href}">${item.name}</a></button></li>`;
    });
    menuHtml += '</ul></div>';

    // Adjust the insertion point as needed, here it's added after the header
    document.body.insertAdjacentHTML('afterbegin', menuHtml);
});