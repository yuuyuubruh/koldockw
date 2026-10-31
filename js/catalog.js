// catalog.js - filter perfumes by category and a simple cart (catalog page)
const grid = document.getElementById('perfume-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartInfo = document.getElementById('cart-info');
let cart = [];   // array of perfumes that user added

// makes HTML for one perfume card
function makeCard(perfume) {
  return '<div class="card">' +
    '<h3>' + perfume.name + '</h3>' +
    '<p>Notes: ' + perfume.notes + '</p>' +
    '<p class="price">' + perfume.price + ' KZT</p>' +
    '<button class="add-btn" data-id="' + perfume.id + '">Add to cart</button>' +
    '</div>';
}

// shows perfumes of the chosen category
function showPerfumes(category) {
  let list;
  switch (category) {
    case 'floral':
      list = perfumes.filter(function (p) { return p.category === 'floral'; });
      break;
    case 'woody':
      list = perfumes.filter(function (p) { return p.category === 'woody'; });
      break;
    case 'fresh':
      list = perfumes.filter(function (p) { return p.category === 'fresh'; });
      break;
    default:
      list = perfumes;
  }
  grid.innerHTML = list.map(makeCard).join('');

  // highlight the active filter button
  filterButtons.forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// updates the text under the grid
function updateCart() {
  const total = cart.reduce(function (sum, p) { return sum + p.price; }, 0);
  cartInfo.textContent = 'Cart: ' + cart.length + ' items, total ' + total + ' KZT';
}

filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    showPerfumes(btn.dataset.category);
  });
});

// one listener for all "Add to cart" buttons
grid.addEventListener('click', function (event) {
  if (event.target.classList.contains('add-btn')) {
    const id = Number(event.target.dataset.id);
    const perfume = perfumes.find(function (p) { return p.id === id; });
    cart.push(perfume);
    updateCart();
  }
});

// keyboard shortcuts 1-4
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case '1': showPerfumes('all'); break;
    case '2': showPerfumes('floral'); break;
    case '3': showPerfumes('woody'); break;
    case '4': showPerfumes('fresh'); break;
  }
});

showPerfumes('all');
