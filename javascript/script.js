/**
 * Front-end JavaScript
 *
 * The JavaScript code you place here will be processed by esbuild. The output
 * file will be created at `../theme/js/script.min.js` and enqueued in
 * `../theme/functions.php`.
 *
 * For esbuild documentation, please see:
 * https://esbuild.github.io/
 */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
Swiper.use([Navigation]);


const navbarToggler = document.getElementById('navbar-toggler');
const closeNavBtn = document.querySelector('.close');
const nav = document.getElementById('navigation');

// open nav function
navbarToggler.onclick = function (e) {
  e.preventDefault();
  nav.classList.add('block');
  nav.classList.remove('hidden');
};
// close nav function
closeNavBtn.onclick = function (e) {
  e.preventDefault();
  nav.classList.add('hidden');
  nav.classList.remove('block');
};

document.addEventListener('scroll', (e) => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  if (window.scrollY > 70) {
    navbar.classList.remove('bg-white/75');
    navbar.classList.add('bg-white');
  } else {
    navbar.classList.remove('bg-white');
    navbar.classList.add('bg-white/75');
  }
});

// features section

// document.addEventListener('DOMContentLoaded', function () {
//   const tabs = document.getElementById('tab');
//   const contents = document.getElementById('features-content-div');

//   tabs.forEach(tab => {
//     tab.addEventListener('click', function () {
//       tabs.forEach(t => t.classList.remove('active'));
//       contents.forEach(c => c.classList.remove('active'));

//       this.classList.add('active');
//       document.getElementById(this.getAttribute('data-tab')).classList.add('active');
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content div');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      this.classList.add('active');
      document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
  });
});

//slider features
// import Swiper bundle with all modules installed
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.features-swiper', {
    // Optional parameters
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        updateActiveFeature();
        updateActiveTab();
      }
    }
  });

  const features = document.querySelectorAll('.features');
  const itemFeature = document.querySelectorAll('.feature');
  const tabs = document.querySelectorAll('.tab');

  function updateActiveFeature() {
    itemFeature.forEach(item => {
      item.classList.remove('active');
    });
    const activeSlideIndex = swiper.realIndex;
    itemFeature[activeSlideIndex].classList.add('active');
  }

  features.forEach(feature => {
    feature.addEventListener('click', () => {
      const slideIndex = feature.getAttribute('data-slide-index');
      swiper.slideToLoop(slideIndex);
      updateActiveFeature();
    });
  });

  function updateActiveTab() {
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    const activeSlideIndex = swiper.realIndex;
    tabs[activeSlideIndex].classList.add('active');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const slideIndex = tab.getAttribute('data-slide-index');
      swiper.slideTo(slideIndex);
      updateActiveTab();
    });
  });
  // Initial update
  updateActiveTab();
  // Initial update
  updateActiveFeature();
});