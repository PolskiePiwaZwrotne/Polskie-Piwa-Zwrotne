
// Licznik odwiedzin lokalnych
const visitCounter = document.getElementById('visitCounter');
let visits = localStorage.getItem('visitCount') || 0;
visits = Number(visits) + 1;
localStorage.setItem('visitCount', visits);
visitCounter.textContent = 'Odwiedziny: ' + visits;
visitCounter.classList.add('animate');
setTimeout(() => visitCounter.classList.remove('animate'), 900);

// Wyszukiwarka i filtr
const searchInput = document.getElementById('searchInput');
const filterBrewery = document.getElementById('filterBrewery');
const beerCards = document.querySelectorAll('.beer-card');

function filterBeers() {
  const query = searchInput.value.toLowerCase().trim();
  const breweryOnly = filterBrewery.checked;

  beerCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const brewery = card.dataset.brewery.toLowerCase();

    if (!query) {
      card.style.display = '';
      return;
    }

    if (breweryOnly) {
      card.style.display = brewery.includes(query) ? '' : 'none';
    } else {
      card.style.display = (name.includes(query) || brewery.includes(query)) ? '' : 'none';
    }
  });
}

searchInput.addEventListener('input', filterBeers);
filterBrewery.addEventListener('change', filterBeers);
