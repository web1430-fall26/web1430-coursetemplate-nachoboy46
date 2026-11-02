// Lab 08 – Open Library Book Search
// API endpoint: https://openlibrary.org/search.json?title=[query]&limit=12
// No API key required.

// ─── DOM references ───────────────────────────────────────────────────────
const form          = document.getElementById('search-form');
const input         = document.getElementById('search-input');
const resultsRegion = document.getElementById('results-region');

// ─── Part 2: API and data functions ──────────────────────────────────────

// fetchBooks(query)
// Async function that:
//   1. Fetches the Open Library search endpoint for the given query (encodeURIComponent)
//   2. Checks response.ok — if false, throws new Error(`Request failed: ${response.status}`)
//   3. Parses and returns the JSON
// Response shape: { numFound: N, docs: [ { title, author_name, first_publish_year }, ... ] }
async function fetchBooks(query) {
  const response = await fetch(`https://openlibrary.org/search.json?title=${query}&limit=12`);
  const data = await response.json();
  return data;
}

// normalizeBooks(docs)
// Accepts the docs array from the API response.
// Returns a new array of plain objects with guaranteed properties:
//   { title, author, year }
// Provide defaults for missing fields:
//   title:  doc.title || 'Unknown Title'
//   author: doc.author_name?.[0] ?? 'Unknown Author'
//   year:   doc.first_publish_year || 'Unknown Year'
function normalizeBooks(docs) {
  let data = [];
  docs.forEach(function(document){
    data.push({
    title: document.title || 'Unkown Title',
    author: document.author_name || 'Unkown Author',
    year: document.first_publish_year || 'Unkown Year'});
  });
  return data;
}

// ─── Part 3: UI state functions ───────────────────────────────────────────
// All functions clear resultsRegion and insert a new element using
// createElement + textContent (no innerHTML).

function showLoading() {
  // Clear resultsRegion, append a <p class="status-loading"> reading "Searching for books…"
  // TODO
  resultsRegion.innerHTML = '';
  const loader = document.createElement('div');
  loader.className = 'loader';
  resultsRegion.appendChild(loader);
}

function showError(message) {
  // Clear resultsRegion, append a <p class="status-error"> with the provided message
  resultsRegion.innerHTML = '';
  const errorMessage = document.createElement('p');
  errorMessage.className='status-error'
  errorMessage.innerText = message;
  resultsRegion.appendChild(errorMessage);
  // TODO
}

function showEmpty() {
  // Clear resultsRegion, append a <p class="status-empty"> reading "No books found. Try a different search."
  // TODO
  resultsRegion.innerHTML = '';
  const emptyMessage = document.createElement('p');
  emptyMessage.className='status=empty'
  emptyMessage.innerText = 'No books found. Try a different search.';
  resultsRegion.appendChild(emptyMessage);
}

function renderBooks(books) {
  // Clear resultsRegion.
  // For each book, create an <article class="book-card"> containing:
  //   - title in an <h2>
  //   - author in a <p class="book-author">
  //   - year in a <p class="book-year">
  // Append all cards to resultsRegion.
  // TODO
  resultsRegion.innerHTML = '';
  books.forEach(function(bookData){
    const book = document.createElement('article');
    book.className='book-card';

    const title = document.createElement('h2');
    title.innerText=bookData.title;
    book.appendChild(title);

    const author = document.createElement('p');
    author.className='book-author';
    author.innerText=bookData.author
    book.appendChild(author);

    const year = document.createElement('p');
    year.className='book-year';
    year.innerText=bookData.year;
    book.appendChild(year);

    resultsRegion.appendChild(book);
});
}

// ─── Part 4: Search handler ───────────────────────────────────────────────
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showError('Please enter a search term.');
    return;
  }

  showLoading();

  try {
    console.log(query);
    const dataWack = await fetchBooks(query);
    const dataNormal = normalizeBooks(dataWack.docs);
    if(dataNormal.length > 0){
      renderBooks(dataNormal);
    } else {
      showEmpty();
    }
    // TODO: call fetchBooks, normalizeBooks, then renderBooks or showEmpty
  } catch (error) {
    showError('Unable to load results. Please check your connection and try again.');
    console.error(error);
  }
});
