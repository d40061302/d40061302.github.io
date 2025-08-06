let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

// Open the lightbox
function openLightbox(event) {
    if (event.target.tagName === 'IMG') {
        currentIndex = Array.from(images).indexOf(event.target);
        updateLightboxImage();
        document.getElementById('lightbox').style.display = 'flex';
    }
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Change the lightbox image based on direction
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateLightboxImage();
}

// Update the lightbox image and thumbnails
function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    // Update the main lightbox image
    lightboxImg.src = images[currentIndex].src;

    // Clear existing thumbnails
    thumbnailContainer.innerHTML = '';

    // Add new thumbnails
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        if (index === currentIndex) {
            thumbnail.classList.add('active-thumbnail');
        }
        thumbnail.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent background click from firing
            updateMainImage(index);
        });

        thumbnailContainer.appendChild(thumbnail);
        if (index === currentIndex) {
            setTimeout(() => {
                thumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }, 0);
        }
    });
}

// Update the main lightbox image when a thumbnail is clicked
function updateMainImage(index) {
    currentIndex = index;
    updateLightboxImage();
}

// Initial render
updateLightboxImage();

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function (event) {
    const lightboxImg = document.getElementById('lightbox-img');
    const isClickInsideImage = lightboxImg.contains(event.target);
    const isButton = event.target.closest('button') || event.target.id === 'close-btn';

    if (!isClickInsideImage && !isButton) {
        closeLightbox();
    }
});

let zoomed = false;
let startX, startY;
let translateX = 0, translateY = 0;

// Zoom on double click
document.getElementById('lightbox-img').addEventListener('dblclick', function () {
    zoomed = !zoomed;
    const img = this;

    if (zoomed) {
        img.classList.add('zoomed');
        img.style.transform = `scale(2) translate(0px, 0px)`;
        translateX = 0;
        translateY = 0;
    } else {
        img.classList.remove('zoomed');
        img.style.transform = 'scale(1)';
    }
});

// auto-recenter buttons

window.addEventListener("resize", () => {
    document.querySelectorAll("#prev-btn, #next-btn").forEach(btn => {
        btn.style.display = "block";
    });
});

// Pan when zoomed
document.getElementById('lightbox-img').addEventListener('mousedown', function (e) {
    if (!zoomed) return;
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;

    const img = this;

    function onMouseMove(e) {
        let dx = e.clientX - startX;
        let dy = e.clientY - startY;

        translateX += dx;
        translateY += dy;

        img.style.transform = `scale(2) translate(${translateX}px, ${translateY}px)`;

        startX = e.clientX;
        startY = e.clientY;
    }

    function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
});


//Code for collapsables
function showContent(type) {

    var contentAboutMe = document.getElementById('content-aboutme');


    contentAboutMe.classList.add('hidden');


    var content = document.getElementById(type);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

function showContent(type) {
    var content = document.getElementById(type);
    content.classList.toggle('hidden');
}


function openLightbox(event) {
    if (event.target.tagName === 'IMG') {
        currentIndex = Array.from(images).indexOf(event.target);
        updateLightboxImage();
        document.getElementById('lightbox').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
}


//Code for modal

var modal = document.getElementById("myModal");

var btn = document.getElementById("btnContact")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal = document.getElementById("myModal");

var btn = document.getElementById("btnContactFooter")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


