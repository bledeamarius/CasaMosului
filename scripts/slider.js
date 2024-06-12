const images = document.querySelectorAll('.img-gallery img');
let currentIndex = 0;

function openFullImg(index) {
    currentIndex = index;
    const modal = document.getElementById('fullImgModal');
    const fullImg = document.getElementById('fullImg');
    fullImg.src = images[currentIndex].src;
    modal.style.display = 'flex';
}

function closeFullImg() {
    const modal = document.getElementById('fullImgModal');
    modal.style.display = 'none';
}

function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    const fullImg = document.getElementById('fullImg');
    fullImg.src = images[currentIndex].src;
}

function prevImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const fullImg = document.getElementById('fullImg');
    fullImg.src = images[currentIndex].src;
}

document.addEventListener('click', (e) => {
    const modal = document.getElementById('fullImgModal');
    if (e.target === modal) {
        closeFullImg();
    }
});
