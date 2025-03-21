window.$ = window.jQuery = require('jquery');

let size = 0;
let page = 1;
let step = 1;
let code = '';
let paginationContainer = null;

function extend(data = {}) {
  size = data.size;
  page = data.page;
  step = data.step;
}

function addPages(s, f) {
  for (let i = s; i < f; i++) {
    code += `<a>${i}</a>`;
  }
}

function addLast() {
  code += `<i>...</i><a>${size}</a>`;
}

function addFirst() {
  code += `<a>1</a><i>...</i>`;
}

function handlePageClick(e) {
  page = +e.target.textContent;
  start();
}

function prevPage() {
  page--;
  if (page < 1) page = 1;
  start();
}

function nextPage() {
  page++;
  if (page > size) page = size;
  start();
}

function bindLinks() {
  const links = paginationContainer.getElementsByTagName('a');
  for (let link of links) {
    if (+link.innerHTML === page) link.className = 'current';
    link.addEventListener('click', handlePageClick, false);
  }
}

function finish() {
 $(paginationContainer).fadeTo(100, 0.8)
  paginationContainer.innerHTML = code;
  $(paginationContainer).fadeTo(100, 1)
  code = '';
  bindLinks();
}

function start() {
  if (size < step * 2 + 6) {
    addPages(1, size + 1);
  } else if (page < step * 2 + 1) {
    addPages(1, step * 2 + 4);
    addLast();
  } else if (page > size - step * 2) {
    addFirst();
    addPages(size - step * 2 - 2, size + 1);
  } else {
    addFirst();
    addPages(page - step, page + step + 1);
    addLast();
  }
  finish();
}

function bindButtons(container) {
  const nav = container.querySelectorAll('.catalog__query-pagination-btn');
  nav[0].addEventListener('click', prevPage, false);
  nav[1].addEventListener('click', nextPage, false);
}

function createSkeleton(container) {
  paginationContainer = container.querySelector('.catalog__query-pagination-pages-box');
  bindButtons(container);
}

function initPagination(container, data) {
  extend(data);
  createSkeleton(container);
  start();
}

function catalogPagination() {
  const container = document.querySelector('.catalog__query-pagination');
  const pageCount = container.dataset.pages;
  const currentPage = container.dataset.current;
  initPagination(container, { size: +pageCount, page: +currentPage, step: 1 });
}

export default catalogPagination;
