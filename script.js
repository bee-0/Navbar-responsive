//dioarafi

var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  this.classList.toggle('open');
  
  // Cek apakah menu sedang terbuka atau tidak
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
});