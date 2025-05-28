// script.js – TechNova Functionality

// Testimonial slider
const slider = document.querySelector('.testimonial-slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (slider && nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });
}

// FAQ Toggle
const questions = document.querySelectorAll('.faq-question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    answer.style.display = isVisible ? 'none' : 'block';
  });
});