import { formatPrice } from "./utils.js";

export function renderCard(product) {
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = product.name;
  const price = document.createElement('p');
  price.textContent = formatPrice(product.price);
  const cat = document.createElement('p');
  cat.textContent = product.category;
  article.append(h2, price, cat);
  return article;
}

export function renderAll() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  products.forEach(product => grid.append(renderCard(product)));
}