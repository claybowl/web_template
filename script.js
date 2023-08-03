document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var section = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});