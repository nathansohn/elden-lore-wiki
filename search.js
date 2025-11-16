const box = document.getElementById('searchBox');
const sections = Array.from(document.querySelectorAll('main section'));

box.addEventListener('input', () => {
  const q = box.value.toLowerCase();
  sections.forEach(sec => {
    const match = sec.textContent.toLowerCase().includes(q);
    sec.style.display = match ? 'block' : 'none';
  });
});