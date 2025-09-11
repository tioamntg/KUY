document.getElementById('scroll-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector('#programs');
  target.scrollIntoView({ behavior: 'smooth' });
});

// เพิ่ม hover effect แบบ dynamic ให้การ์ดโปรแกรม
const programs = document.querySelectorAll('.program');

programs.forEach(program => {
  program.addEventListener('mouseenter', () => {
    program.style.transform = 'scale(1.05)';
    program.style.transition = 'transform 0.3s ease';
  });
  program.addEventListener('mouseleave', () => {
    program.style.transform = 'scale(1)';
  });
});