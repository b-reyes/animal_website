document.addEventListener('DOMContentLoaded', function() {
    var headerHtml = `
    <div class="title-container" id="waterPool">
        <div id="title-box"> 
            <img id="cat-left" src="images/clip-art-cat.png" alt="Descriptive Text About the Image">
            <h1 id="title"> PETS! </h1>
            <img id="dog-right" src="images/dog-clip-art.png" alt="Descriptive Text About the Image">
        </div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Create a new script element
    var script = document.createElement('script');
    script.src = "header_content/rippleEffect.js";
    // Append the script element to the document's head (or body)
    document.head.appendChild(script); // You can also append to document.body if preferred
});