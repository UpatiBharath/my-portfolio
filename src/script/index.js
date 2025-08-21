document.addEventListener('DOMContentLoaded', () => {
   // Smooth scrolling for navigation links
   const navLinks = document.querySelectorAll('a[href^="#"]');
   for (const link of navLinks) {
      link.addEventListener('click', function (e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
            targetElement.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
            });
         }
      });
   }

   // Replace Lucide icons after they are loaded
   lucide.createIcons();
});