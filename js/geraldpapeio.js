"use strict";

function reverseLinks() {
  for (var link of document.querySelectorAll('.obfusmail')) {
    links.href = link.dataset.href.split('').reverse().join('');
  }
}

window.addEventListener('DOMContentLoaded', reverseLinks);
