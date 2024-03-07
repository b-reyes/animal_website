document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with IDs starting with 'gb' and not equal to 'gb1'
    var glassBoxes = document.querySelectorAll('[id^="gb"]');

    // Function to add event listener to a glass box
    function addClickListener(glassBox) {
        glassBox.addEventListener('click', function() {
            var paragraphs = this.getElementsByTagName('p');
            var image = this.getElementsByTagName('img')[0];

            // This will bring the clicked box to the forefront
            this.classList.add('forefront');
            this.style.width = '500px';
            this.style.height = '600px';
            if (image) image.style.display = 'none';

            for (var i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.color = 'black';
                paragraphs[i].style.display = 'block';
            }

            // Assuming you want to revert back to normal when clicked again
            if (document.getElementsByClassName("page-container")[0].classList.contains('backdrop')) {
                document.getElementsByClassName("page-container")[0].classList.remove('backdrop');
                this.classList.remove('forefront'); // Remove the forefront class to revert
                this.style.width = '200px';
                this.style.height = '300px';
                if (image) image.style.display = 'block';
                for (var i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.display = 'none';
                }
            } else {
                document.getElementsByClassName("page-container")[0].classList.add('backdrop');
            }
        });
    }

    // Apply the event listener to each glass box
    glassBoxes.forEach(addClickListener);
});
