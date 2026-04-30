const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';
});
// Cursor vergroten bij hovers
document.querySelectorAll('a, button, .card').forEach(el => {
el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});
