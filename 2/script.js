const items = document.querySelectorAll('#lista li');

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('clicked');
  });
});
