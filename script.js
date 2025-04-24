// Button click feedback
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
  });
});

