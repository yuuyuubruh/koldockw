// rating.js - star rating for every perfume (gallery page)
const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');
const ratings = {};   // object: perfume name -> rating, for example { 'Rose Dream': 4 }

// colors the first "value" stars
function paintStars(value) {
  stars.forEach(function (star, index) {
    star.classList.toggle('active', index < value);
  });
}

// shows the rating of the current perfume (called also from gallery.js)
function showSavedRating() {
  const name = document.getElementById('image-title').textContent;
  const value = ratings[name] || 0;
  paintStars(value);
  ratingText.textContent = value === 0 ? 'No rating yet' : 'Your rating: ' + value + ' / 5';
}

stars.forEach(function (star) {
  star.addEventListener('click', function () {
    const name = document.getElementById('image-title').textContent;
    ratings[name] = Number(star.dataset.value);
    showSavedRating();
    playSound('star');
  });
});
