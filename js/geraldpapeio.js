document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".obfusmail");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var address = link.dataset.href;
    link.href = address.split('').reverse().join('');
  }
})
