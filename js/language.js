// language.js - language selector English / Russian / Kazakh (index page)
// object with all texts, the keys are the same as data-key in HTML
const translations = {
  en: { title: 'Welcome to Essence', text: 'Every scent tells a story. Find yours.', btn: 'Go to catalog' },
  ru: { title: 'Добро пожаловать в Essence', text: 'У каждого аромата своя история. Найдите свой.', btn: 'Перейти в каталог' },
  kk: { title: 'Essence дүкеніне қош келдіңіз', text: 'Әр иістің өз тарихы бар. Өзіңіздікін табыңыз.', btn: 'Каталогқа өту' }
};

const langSelect = document.getElementById('lang-select');

langSelect.addEventListener('change', function () {
  let current;
  switch (langSelect.value) {
    case 'ru':
      current = translations.ru;
      break;
    case 'kk':
      current = translations.kk;
      break;
    default:
      current = translations.en;
  }

  // go through all elements with data-key and change their text
  document.querySelectorAll('[data-key]').forEach(function (element) {
    element.textContent = current[element.dataset.key];
  });
});
