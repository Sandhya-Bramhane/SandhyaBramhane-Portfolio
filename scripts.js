document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});


 function typeWriter(element, texts, index, speed) {
    let textIndex = 0;
    let charIndex = 0;
    function type() {
      if (charIndex < texts[index].length) {
        element.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          element.innerHTML = ''; // Clear text
          index = (index + 1) % texts.length; // Move to the next text
          charIndex = 0; // Reset char index
          type();
        }, 1000); // Delay before typing the next text
      }
    }
    type();
  }

  document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('typed-text');
    const texts = ["Your Text Here", "Another Text Here", "More Text Here"];
    typeWriter(element, texts, 0, 100); // Adjust speed here
  });