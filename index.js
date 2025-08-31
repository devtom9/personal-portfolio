// JavaScript to ensure header doesn't appear in first page
window.addEventListener('scroll', function () {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > window.innerHeight) {
    header.style.display = 'block';
  } else {
    header.style.display = 'none';
  }
});

// For About Sliding IN
const homeBtn = document.querySelector('.home-btn');
const aboutLeft = document.querySelector('.about-left');
const aboutRight = document.querySelector('.about-right');
const aboutH1 = document.querySelector('#abouth1');

homeBtn.addEventListener('click', function () {
  aboutLeft.classList.add('pull-in');
  aboutRight.classList.add('pull-in2');
  aboutH1.classList.add('about-h1');
});

// For Placeholder (Contact Section)
function clearPlaceholder(input) {
  input.placeholder = '';
}
function restorePlaceholder(input) {
  if (input.value === '') {
    input.placeholder = 'Hi, can we work on ABC project together?';
  }
}

// For display (PROJECT SECTION)
let pjOne = document.querySelector('.project-one');
let pjTwo = document.querySelector('.project-two');
let pjThree = document.querySelector('.project-three');
let overLay = document.querySelector('.overlay-pj');
let overLay2 = document.querySelector('.overlay-pj2');
let overLay3 = document.querySelector('.overlay-pj3');

pjOne.addEventListener('mouseover', function () {
  pjOne.style.opacity = 0.8;
  overLay.style.display = 'flex';
});
pjOne.addEventListener('mouseout', function () {
  pjOne.style.opacity = 1;
  overLay.style.display = 'none';
});
pjTwo.addEventListener('mouseover', function () {
  pjTwo.style.opacity = 0.8;
  overLay2.style.display = 'flex';
});
pjTwo.addEventListener('mouseout', function () {
  pjTwo.style.opacity = 1;
  overLay2.style.display = 'none';
});
pjThree.addEventListener('mouseover', function () {
  pjThree.style.opacity = 0.8;
  overLay3.style.display = 'flex';
});
pjThree.addEventListener('mouseout', function () {
  pjThree.style.opacity = 1;
  overLay3.style.display = 'none';
});
