const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');

const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const nav = document.querySelector('.carousel__nav');
const dots = Array.from(nav.children);


function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + 'px';
}

function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

function updateDots(currentDot, targetDot) {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

function hideShowArrows(slides, prevBtn, nextBtn, targetIndex) {
  if (targetIndex === 0) {
    prevBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
  } else {
    prevBtn.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  }
}

slides.forEach(setSlidePosition);

// Move Forward
nextBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);

  updateDots(currentDot, nextDot);

  hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});

// Move Backward
prevBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  
  moveToSlide(track, currentSlide, prevSlide);

  updateDots(currentDot, prevDot);

  hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
});

// Make Nav Work
nav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = nav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  updateDots(currentDot, targetDot);

  hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
});