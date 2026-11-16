// Lab 10 – Starting point: single-file "bundle"
// This is the monolithic script you will refactor into a Vite module project.
// Do NOT submit this file. Use it as your reference only.
// Your goal: same behavior, reorganized into src/data.js, utils.js, render.js, events.js, main.js

// All code in one file — globals everywhere



let activeCategory = 'All';







document.addEventListener('DOMContentLoaded', () => {
  buildFilter();
  renderAll();
});
