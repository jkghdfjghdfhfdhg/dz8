let slider = document.querySelector('.slider_menu');
let slides = document.querySelectorAll('.slider_menu > div');

// устанавливаем начальный индекс слайда
let currentSlide = 0;

// устанавливаем ширину блоков с изображениями
slides.forEach(slide => {
  slide.style.width = slider.clientWidth + 'px';
});

// добавляем обработчики событий на кнопки переключения слайдов
let prevButton = document.createElement('button');
prevButton.innerHTML = 'Previous';
prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  slider.style.transform = `translateX(${-currentSlide * slider.clientWidth}px)`;
});
document.querySelector('.slider').appendChild(prevButton);

let nextButton = document.createElement('button');
nextButton.innerHTML = 'Next';
nextButton.addEventListener('click', () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slider.style.transform = `translateX(${-currentSlide * slider.clientWidth}px)`;
});
document.querySelector('.slider').appendChild(nextButton);