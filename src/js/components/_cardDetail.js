import Swiper from 'swiper/bundle';
window.$ = window.jQuery = require('jquery');

function cardDetail() {
  const favoritBtn = document.querySelector('.card-detail__banner-favorite-btn');
  favoritBtn.addEventListener('click', () => {
    favoritBtn.classList.toggle('isActive');
  });


  const swiper = new Swiper('.card-detail__banner-img-swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade', // Включаем эффект fade
    fadeEffect: {
      crossFade: true // Этот параметр позволяет плавно менять слайды
    },
    speed: 800,
    autoplay: {
      delay: 10000, // Задержка между слайдами (в миллисекундах)
      disableOnInteraction: true // Автоплей не останавливается при взаимодействии с слайдером
    },
    pagination: {
      el: '.card-detail__banner-img-swiper-pagination'
    }
  });




  //ниже для обсервера свайпера ресайза
  // const catalogWrapper = document.querySelector('.selected-list');
  // function cardSlicer() {
  //   // Функция для инициализации Swiper на новых карточках
  //   function initializeSwiper() {
  //     const swiperElements = document.querySelectorAll('.selected-card__img-swiper');

  //   }

  //   const observer = new MutationObserver((mutationsList) => {
  //     mutationsList.forEach((mutation) => {
  //       if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
  //         // Если добавлены новые карточки, инициализируем для них Swiper
  //         initializeSwiper();
  //       }
  //     });
  //   });

  //   // Настройка наблюдателя
  //   observer.observe(catalogWrapper, {
  //     childList: true // отслеживаем добавление новых элементов
  //     // subtree: true // отслеживаем изменения в дочерних элементах
  //   });

  //   initializeSwiper();
  // }

  // cardSlicer();
}

export default cardDetail;
