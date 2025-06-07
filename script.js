document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxImage = document.getElementById('lightboxImage');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      lightboxImage.src = item.src;
    });
  });
});
