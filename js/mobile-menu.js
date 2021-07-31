(() => {
  'use strict';
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const closeMenuBtn = document.querySelector('[data-close-menu-button]');
  const navLinkMobile = document.querySelector('.nav-list-mobile');
  const headerRef = document.querySelector('.header');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'hidden';
    headerRef.style.backgroundColor = 'var(--primary-bg-color)';
  });
  closeMenuBtn.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'visible';
    headerRef.style.backgroundColor = 'transparent';
  });

  navLinkMobile.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'visible';
    headerRef.style.backgroundColor = 'transparent';
  });
})();
