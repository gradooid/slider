// Carousel by Kevin Powell
// const prevBtn = document.querySelector('.carousel__btn_prev');
// const nextBtn = document.querySelector('.carousel__btn_next');

// const track = document.querySelector('.carousel__track')
// const slides = Array.from(track.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// const nav = document.querySelector('.carousel__nav');
// const dots = Array.from(nav.children);


// function setSlidePosition(slide, index) {
//   slide.style.left = slideWidth * index + 'px';
// }

// function moveToSlide(track, currentSlide, targetSlide) {
//   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//   currentSlide.classList.remove('current-slide');
//   targetSlide.classList.add('current-slide');
// }

// function updateDots(currentDot, targetDot) {
//   currentDot.classList.remove('current-slide');
//   targetDot.classList.add('current-slide');
// }

// function hideShowArrows(slides, prevBtn, nextBtn, targetIndex) {
//   if (targetIndex === 0) {
//     prevBtn.classList.add('hidden');
//     nextBtn.classList.remove('hidden');
//   } else if (targetIndex === slides.length - 1) {
//     prevBtn.classList.remove('hidden');
//     nextBtn.classList.add('hidden');
//   } else {
//     prevBtn.classList.remove('hidden');
//     nextBtn.classList.remove('hidden');
//   }
// }

// slides.forEach(setSlidePosition);

// // Move Forward
// nextBtn.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   const nextSlide = currentSlide.nextElementSibling;
//   const currentDot = nav.querySelector('.current-slide');
//   const nextDot = currentDot.nextElementSibling;
//   const nextIndex = slides.findIndex(slide => slide === nextSlide);

//   moveToSlide(track, currentSlide, nextSlide);

//   updateDots(currentDot, nextDot);

//   hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
// });

// // Move Backward
// prevBtn.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   const prevSlide = currentSlide.previousElementSibling;
//   const currentDot = nav.querySelector('.current-slide');
//   const prevDot = currentDot.previousElementSibling;
//   const prevIndex = slides.findIndex(slide => slide === prevSlide);
  
//   moveToSlide(track, currentSlide, prevSlide);

//   updateDots(currentDot, prevDot);

//   hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
// });

// // Make Nav Work
// nav.addEventListener('click', e => {
//   const targetDot = e.target.closest('button');

//   if(!targetDot) return;

//   const currentSlide = track.querySelector('.current-slide');
//   const currentDot = nav.querySelector('.current-slide');
//   const targetIndex = dots.findIndex(dot => dot === targetDot);
//   const targetSlide = slides[targetIndex];

//   moveToSlide(track, currentSlide, targetSlide);

//   updateDots(currentDot, targetDot);

//   hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
// });









// My carousel
// Variables
let counter = 0;

const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');

const slides = document.querySelectorAll('.carousel__item');

const carousel = document.querySelector('.carousel__main');

const nav = document.querySelector('.carousel__nav');
const indicator = nav.innerHTML = '<input type="radio" name="carousel__indicator" class="carousel__indicator">'.repeat(slides.length);

const navDots = Array.from(nav.children);

const carouselWrap = document.querySelector('.carousel-wrap');


// Functions
updateDots();

function moveSlide(carousel, counter) {
  const slideWidth = slides[0].clientWidth;

  carousel.style.transition = '0.5s';
  carousel.style.transform = (`translate(-${counter * slideWidth}px)`);
  updateDots();
}

function updateDots() {
  navDots[counter].click();
}



// Make buttons work
nextBtn.addEventListener('click', ()=> {
  counter++;
  if(counter >= slides.length) counter = 0;

  moveSlide(carousel, counter);
});

prevBtn.addEventListener('click', ()=> {
  counter--;
  if(counter < 0) counter = slides.length - 1;

  moveSlide(carousel, counter);
});



// Indicators
console.log(navDots);

nav.addEventListener('click', (e)=> {
  const indicatorTarget = e.target.closest('input');

  if(!indicatorTarget) return;

  const targetIndex = navDots.findIndex(indicator => indicator === indicatorTarget);

  counter = targetIndex;

  moveSlide(carousel, counter);
});



// Make arrow keys work
window.addEventListener('keydown', (e)=> {
  if(e.keyCode === 39) {
    counter++;
    if(counter >= slides.length) counter = 0;

    moveSlide(carousel, counter);
  } else if (e.keyCode === 37) {
    counter--;
    if(counter < 0) counter = slides.length - 1;

    moveSlide(carousel, counter);
  } else return;
  console.log(e.keyCode);
});
