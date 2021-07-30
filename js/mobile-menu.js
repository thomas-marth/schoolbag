(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const closeMenuBtn = document.querySelector('[data-close-menu-button]');
  const navLinkMobile = document.querySelector('.nav-list-mobile');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'hidden';
  });
  closeMenuBtn.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'visible';
  });

  navLinkMobile.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'visible';
    console.log(menuBtnRef);
  });
})();
