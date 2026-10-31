// gallery.js - thumbnails change the big image (gallery page)
const bigImage = document.getElementById('big-image');
const imageTitle = document.getElementById('image-title');
const thumbs = document.querySelectorAll('#thumbs img');

thumbs.forEach(function (thumb) {
  thumb.addEventListener('click', function () {
    bigImage.src = thumb.src;            // change the src attribute
    imageTitle.textContent = thumb.alt;  // change the title

    // move the "active" class to the clicked thumbnail
    thumbs.forEach(function (t) { t.classList.remove('active'); });
    thumb.classList.add('active');

    // small zoom animation
    bigImage.classList.add('pop');
    setTimeout(function () { bigImage.classList.remove('pop'); }, 300);

    showSavedRating();   // function from rating.js
  });
});
