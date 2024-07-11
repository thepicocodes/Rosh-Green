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

const navbarToggler = document.getElementById('navbar-toggler');
const closeNavBtn = document.querySelector('.close');
const nav = document.getElementById('navigation');

// open nav function
navbarToggler.onclick = function (e) {
  nav.classList.add('block');
  nav.classList.remove('hidden');
};
// close nav function
closeNavBtn.onclick = function (e) {
  e.preventDefault();
  nav.classList.add('hidden');
  nav.classList.remove('block');
};

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