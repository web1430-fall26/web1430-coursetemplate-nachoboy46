//General utility functions
import { products } from './data.js';

export function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

export function getCategories() {
  const cats = products.map(p => p.category);
  return ['All', ...new Set(cats)];
}

export function filterProducts(products, category) {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
}