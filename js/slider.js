(() => {
  'use strict';

  const firstSliderBtnRef = document.querySelector('.slider__dots-item.first');
  const secondSliderBtnRef = document.querySelector('.slider__dots-item.second');
  const thirdSliderBtnRef = document.querySelector('.slider__dots-item.third');
  const sliderRef = document.querySelector('.hero');
  const sliderHeadingRef = document.querySelector('.hero__heading');

  firstSliderBtnRef.addEventListener('click', () => {
    secondSliderBtnRef.classList.remove('active');
    thirdSliderBtnRef.classList.remove('active');
    firstSliderBtnRef.classList.add('active');
    sliderRef.style.backgroundImage = "url('./images/slide-1.jpg')";
    sliderRef.style.backgroundColor = 'var(--primary-bg-color)';
    sliderHeadingRef.src = './images/hero-text1.png';
  });

  secondSliderBtnRef.addEventListener('click', () => {
    firstSliderBtnRef.classList.remove('active');
    thirdSliderBtnRef.classList.remove('active');
    secondSliderBtnRef.classList.add('active');
    sliderRef.style.backgroundImage = "url('./images/slide-2.jpg')";
    sliderRef.style.backgroundColor = 'var(--secondary-bg-color)';
    sliderHeadingRef.src = './images/hero-text2.png';
  });

  thirdSliderBtnRef.addEventListener('click', () => {
    firstSliderBtnRef.classList.remove('active');
    secondSliderBtnRef.classList.remove('active');
    thirdSliderBtnRef.classList.add('active');
    sliderRef.style.backgroundImage = "url('./images/slide-3.jpg')";
    sliderRef.style.backgroundColor = 'var(--third-bg-color)';
    sliderHeadingRef.src = './images/hero-text3.png';
  });
})();

(() => {
  const firstSliderBtnRef = document.querySelector('.hero--mobile .slider__dots-item.first');
  const secondSliderBtnRef = document.querySelector('.hero--mobile .slider__dots-item.second');
  const thirdSliderBtnRef = document.querySelector('.hero--mobile .slider__dots-item.third');
  const sliderRef = document.querySelector('.hero--mobile');
  const sliderHeadingRef = document.querySelector('.hero--mobile .hero__heading--mobile');

  firstSliderBtnRef.addEventListener('click', () => {
    secondSliderBtnRef.classList.remove('active');
    thirdSliderBtnRef.classList.remove('active');
    firstSliderBtnRef.classList.add('active');
    sliderRef.style.backgroundImage = "url('./images/slide-1m.jpg')";
    sliderRef.style.backgroundColor = 'var(--primary-bg-color)';
    sliderHeadingRef.src = './images/cta-mobile.png';
  });

  secondSliderBtnRef.addEventListener('click', () => {
    firstSliderBtnRef.classList.remove('active');
    thirdSliderBtnRef.classList.remove('active');
    secondSliderBtnRef.classList.add('active');
    sliderRef.style.backgroundImage = "url('./images/slide-2m.jpg')";
    sliderRef.style.backgroundColor = 'var(--secondary-bg-color)';
    sliderHeadingRef.src = './images/cta-mobile2.png';
  });

  thirdSliderBtnRef.addEventListener('click', () => {
    firstSliderBtnRef.classList.remove('active');
    secondSliderBtnRef.classList.remove('active');
    thirdSliderBtnRef.classList.add('active');
    sliderRef.style.backgroundImage = "url('./images/slide-3m.jpg')";
    sliderRef.style.backgroundColor = 'var(--third-bg-color)';
    sliderHeadingRef.src = './images/cta-mobile3.png';
  });
})();
