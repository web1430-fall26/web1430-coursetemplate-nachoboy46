import { filterProducts, getCategories } from './utils.js';
import { renderGrid } from './render.js';

export function buildFilter(products, bar, grid) {
  getCategories(products).forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category;
    btn.addEventListener('click', () => {
      renderGrid(filterProducts(products, category), grid);
    });
    bar.append(btn);
  });
}