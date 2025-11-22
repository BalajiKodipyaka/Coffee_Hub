document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  navToggle && navToggle.addEventListener('click', () => {
    if (!nav) return;
    nav.style.display = nav.style.display === 'block' ? '' : 'block';
  });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // basic form handling
  const form = document.getElementById('contact-form');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks! We received your message.');
    form.reset();
  });
});
