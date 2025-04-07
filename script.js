//your code here
const images = document.querySelectorAll('.image');
let draggedImage = null;

// Add event listeners for drag and drop
images.forEach(image => {
    image.addEventListener('dragstart', handleDragStart);
    image.addEventListener('dragover', handleDragOver);
    image.addEventListener('drop', handleDrop);
    image.addEventListener('dragend', handleDragEnd);
});

function handleDragStart(e) {
    draggedImage = this; // Store the reference to the dragged image
    setTimeout(() => {
        this.style.display = 'none'; // Hide the image being dragged
    }, 0);
}

function handleDragOver(e) {
    e.preventDefault(); // Prevent default to allow drop
}

function handleDrop(e) {
    e.preventDefault(); // Prevent default behavior
    if (this !== draggedImage) {
        // Swap the images
        const temp = this.innerHTML;
        this.innerHTML = draggedImage.innerHTML;
        draggedImage.innerHTML = temp;
    }
}

function handleDragEnd() {
    this.style.display = 'flex'; // Show the image again
}