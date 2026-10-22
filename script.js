const photos = [...document.querySelectorAll('.photo-trigger, .gallery-item')];
const dialog = document.querySelector('.lightbox');
const dialogImage = document.querySelector('.lightbox-image');
const dialogCount = document.querySelector('.lightbox-count');
const dialogCaption = document.querySelector('.lightbox-caption');
let currentIndex = 0;

function showPhoto(index) {
  currentIndex = (index + photos.length) % photos.length;
  const photo = photos[currentIndex];
  const image = photo.querySelector('img');
  dialogImage.src = image.currentSrc || image.src;
  dialogImage.alt = image.alt;
  dialogCount.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
  dialogCaption.textContent = photo.dataset.title || '';
}

photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    showPhoto(index);
    dialog.showModal();
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
document.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(currentIndex - 1));
document.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(currentIndex + 1));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(currentIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(currentIndex + 1); }
});
