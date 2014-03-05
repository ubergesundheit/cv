document.addEventListener "DOMContentLoaded", ->
  links = document.getElementsByClassName('obfusmail')
  for link in links
    email = link.innerHTML
    link.innerHTML = '<a href="mailto:'+email.split('').reverse().join('')+'" rel="nofollow">'+email+'</a>'

