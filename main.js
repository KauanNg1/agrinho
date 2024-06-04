document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('ul li');
    const sections = document.querySelectorAll('main section');
  
    navLinks.forEach(function(link, index) {
      link.addEventListener('click', function() {
        navLinks.forEach(function(otherLink) {
          otherLink.classList.remove('active');
        });
  
        sections.forEach(function(section) {
          section.style.display = 'none';
        });
  
        link.classList.add('active');
        sections[index].style.display = 'block';

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  });