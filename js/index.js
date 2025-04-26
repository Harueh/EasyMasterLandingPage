document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = document.getElementById('menuIcon');
  let isMenuOpen = false;

  menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileNav.classList.toggle('active');

    menuIcon.src = isMenuOpen
      ? './images/icon-close.svg'
      : './images/icon-hamburger.svg';

    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  });

  document.addEventListener('click', (e) => {
    if (
      isMenuOpen &&
      !mobileNav.contains(e.target) &&
      !menuButton.contains(e.target)
    ) {
      mobileNav.classList.remove('active');
      menuIcon.src = './images/icon-hamburger.svg';
      document.body.style.overflow = '';
      isMenuOpen = false;
    }
  });
});
