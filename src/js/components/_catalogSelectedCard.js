import Swiper from 'swiper/bundle';
window.$ = window.jQuery = require('jquery');

// import catalogPagination from './_catalogPagination';

function catalogSelectedCard() {
  const catalogWrapper = document.querySelector('.selected-list');

  function onClickList() {
    catalogWrapper.addEventListener('click', (e) => {
      let target = e.target;

      if (target.classList.contains('selected-card__www-label')) {
        const popup = target.closest('.selected-card__www-box')?.querySelector('.selected-card__www-popup');
        if (popup) {
          popup.classList.toggle('isActive');
        }
      }

      if (target.classList.contains('selected-card__info-btn--favorite')) {
        target.classList.toggle('isActive');
      }

      if (target.classList.contains('selected-card__zip-btn')) {
        const popup = target.closest('.selected-card__zip-box')?.querySelector('.selected-card__zip-popup');
        if (popup) {
          popup.classList.toggle('isActive');
        }
      }
    });
  }

  function cardSlicer() {
    // Функция для инициализации Swiper на новых карточках
    function initializeSwiper() {
      const swiperElements = document.querySelectorAll('.selected-card__img-swiper');
      const swiperInnerElements = document.querySelectorAll('.selected-card__info-swiper');

      swiperElements.forEach((swiperElement) => {
        const pagination = swiperElement.querySelector('.selected-card__img-swiper-pagination');
        if (!swiperElement.classList.contains('swiper-initialized')) {
          // Проверка на уже инициализированный слайдер
          new Swiper(swiperElement, {
            slidesPerView: 1,
            loop: true,
            effect: 'fade', // Включаем эффект fade
            fadeEffect: {
              crossFade: true // Этот параметр позволяет плавно менять слайды
            },
            speed: 800,
            autoplay: {
              delay: 5000, // Задержка между слайдами (в миллисекундах)
              disableOnInteraction: false // Автоплей не останавливается при взаимодействии с слайдером
            },
            pagination: {
              el: pagination
            }
          });

          // Помечаем элемент как инициализированный
          swiperElement.classList.add('swiper-initialized');
        }
      });

      swiperInnerElements.forEach((swiperInnerElement) => {
        const prev = swiperInnerElement.parentElement.querySelector('.selected-card__info-swiper-navigation--left');
        const next = swiperInnerElement.parentElement.querySelector('.selected-card__info-swiper-navigation--right');
        if (!swiperInnerElement.classList.contains('swiper-initialized')) {
          // Проверка на уже инициализированный слайдер
          new Swiper(swiperInnerElement, {
            slidesPerView: 'auto',
            speed: 800,
            spaceBetween: 12,

            navigation: {
              prevEl: prev,
              nextEl: next
            }
          });

          // Помечаем элемент как инициализированный
          swiperInnerElement.classList.add('swiper-initialized');
        }
      });
    }

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Если добавлены новые карточки, инициализируем для них Swiper
          initializeSwiper();
        }
      });
    });

    // Настройка наблюдателя
    observer.observe(document.querySelector('.observer'), {
      childList: true, // отслеживаем добавление новых элементов
      // subtree: true // отслеживаем изменения в дочерних элементах
    });

    initializeSwiper();
  }

  onClickList();
  cardSlicer();

  // document.querySelector('.wqwdqwdqwd').addEventListener('click', () => {
  //   // Создаем элемент из строки HTML
  //   const container = document.querySelector('.catalog__query-pagination');
  //   container.dataset.pages = '50';
  //   container.dataset.current = '10';
  //   catalogPagination();
  //   const swiperElement = document.createElement('div');
  //   swiperElement.className = `catalog__query-item selected-card`;
  //   swiperElement.innerHTML = `
  //       <li class="catalog__query-item selected-card">
  //     <div class="selected-card__img-swiper-box">
  //       <button class="selected-card__img-slide-share-btn selected-card__img-slide-btn">
  //         <div class="selected-card__img-slide-btn-img-box">
  //           <img src="./assets/images/share.svg" alt="share" />
  //         </div>
  //       </button>
  //       <div class="selected-card__img-swiper swiper">
  //         <div class="selected-card__img-swiper-wrapper swiper-wrapper">
  //           <div class="selected-card__img-slide swiper-slide">
  //             <a data-fancybox="gallery" href="./assets/images/cardImg.webp" class="selected-card__img-box">
  //               <img src="./assets/images/cardImg.webp" alt="card image" />
  //             </a>
  //           </div>
  //           <div class="selected-card__img-slide swiper-slide">
  //             <a data-fancybox="gallery" href="./assets/images/catalogMain/catalogMain1.webp" class="selected-card__img-box">
  //               <img src="./assets/images/catalogMain/catalogMain1.webp" alt="card image" />
  //             </a>
  //           </div>
  //         </div>
  //         <div class="selected-card__img-swiper-pagination swiper-pagination"></div>
  //       </div>
  //       <div class="selected-card__img-slide-loupe-btn selected-card__img-slide-btn">
  //         <div class="selected-card__img-slide-btn-img-box">
  //           <img src="./assets/images/loupe.svg" alt="share" />
  //         </div>
  //       </div>
  //     </div>

  //     <div class="selected-card__content-box">
  //       <div class="selected-card__info-box">
  //         <div class="selected-card__info-content-box">
  //           <a href="#" class="selected-card__info-content-link">
  //             <div class="selected-card__info-title-box">
  //               <p class="selected-card__info-title txt28 txt28_regular">Мастер баннер Sensodyne</p>
  //               <ul class="selected-card__info-list">
  //                 <li class="selected-card__info-item selected-card__info-item--category txt16 txt16_medium">Мастер баннер</li>
  //                 <li class="selected-card__info-item selected-card__info-item--time txt16 txt16_medium">
  //                   Декабрь 2024-Январь 2025
  //                 </li>
  //               </ul>
  //             </div>
  //             <div class="selected-card__info-communication-box">
  //               <div class="selected-card__info-communication">
  //                 <div class="selected-card__info-communication-svg-box">
  //                   <img src="./assets/images/buy.svg" alt="buy" />
  //                 </div>
  //                 <p
  //                   class="selected-card__info-communication-title selected-card__info-communication-title--ellipsis txt15 txt15_regular"
  //                 >
  //                   Зубная паста Sensodyne Clinical White Активное Отбеливание Зубная паста Sensodyne Clinical White Активное
  //                   Отбеливание
  //                 </p>
  //               </div>
  //               <div class="selected-card__info-communication-wrapper">
  //                 <div class="selected-card__info-communication">
  //                   <div class="selected-card__info-communication-svg-box">
  //                     <img src="./assets/images/work.svg" alt="work" />
  //                   </div>
  //                   <p class="selected-card__info-communication-title txt15 txt15_regular">Отдел маркетинга</p>
  //                 </div>
  //                 <div class="selected-card__info-communication">
  //                   <div class="selected-card__info-communication-svg-box">
  //                     <img src="./assets/images/profile.svg" alt="profile" />
  //                   </div>
  //                   <p class="selected-card__info-communication-title txt15 txt15_regular">Чеки из Аптеки</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </a>

  //           <div class="selected-card__info-swiper-box"></div>
  //         </div>

  //         <div class="selected-card__info-btn-box">
  //           <button class="selected-card__info-btn selected-card__info-btn--favorite">
  //             <div class="selected-card__info-btn-svg-box">
  //               <img src="./assets/images/favoriteWhite.svg" alt="favorite" />
  //             </div>
  //           </button>

  //           <button class="selected-card__info-btn selected-card__info-btn--edit">
  //             <div class="selected-card__info-btn-svg-box">
  //               <img src="./assets/images/edit.svg" alt="edit" />
  //             </div>
  //           </button>
  //         </div>
  //       </div>

  //       <div class="selected-card__footer-box">
  //         <div class="selected-card__www-box">
  //           <div class="selected-card__www-label">
  //             <p class="selected-card__www-title txt14 txt14_medium">ССЫЛКА на файл</p>

  //             <div class="selected-card__www-svg-box">
  //               <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                 <path
  //                   d="M2.27238 6L7.53622 10.8094L12.8 6"
  //                   stroke="#4C4E55"
  //                   stroke-width="1.66668"
  //                   stroke-linecap="round"
  //                   stroke-linejoin="round"
  //                 />
  //               </svg>
  //             </div>
  //           </div>
  //           <div class="selected-card__www-popup">
  //             <ul class="selected-card__www-popup-list">
  //               <li className="selected-card__www-popup-item">
  //                 <a href="#" class="selected-card__www-popup-link txt18 txt18_bold">Figma</a>
  //               </li>
  //               <li className="selected-card__www-popup-item">
  //                 <a href="#" class="selected-card__www-popup-link txt18 txt18_bold">PSD</a>
  //               </li>
  //               <li className="selected-card__www-popup-item">
  //                 <a href="#" class="selected-card__www-popup-link txt18 txt18_bold">AI</a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>

  //         <div class="selected-card__zip-box">
  //           <div class="selected-card__zip-btn">
  //             <p class="selected-card__zip-title txt14 txt14_medium">скачать zip</p>

  //             <div class="selected-card__zip-svg-box">
  //               <img src="./assets/images/downloadGray.svg" alt="dowmload" />
  //             </div>
  //           </div>
  //           <div class="selected-card__zip-popup">
  //             <div class="selected-card__zip-popup-inner">
  //               <div class="selected-card__zip-popup-header">
  //                 <p class="selected-card__zip-popup-title txt18 txt18_bold">Выберите формат</p>
  //                 <a href="#" class="selected-card__zip-popup-download">
  //                   <p class="selected-card__zip-popup-download-text txt14 txt14_medium">СКАЧАТЬ НЕСКОЛЬКО</p>
  //                   <div class="selected-card__zip-popup-download-svg-box">
  //                     <img src="./assets/images/downloadGray.svg" alt="" />
  //                   </div>
  //                 </a>
  //               </div>
  //               <form class="selected-card__zip-popup-form">
  //                 <label class="selected-card__zip-popup-label">
  //                   <input type="checkbox" class="selected-card__zip-popup-input" />
  //                   <span class="selected-card__zip-popup-square"></span>
  //                   <span class="selected-card__zip-popup-text-box">
  //                     <span class="selected-card__zip-popup-input-title txt18 txt18_medium">JPEG</span>
  //                     <a href="#" class="selected-card__zip-popup-input-svg-wrapper">
  //                       <div class="selected-card__zip-popup-input-svg-box">
  //                         <img src="./assets/images/downloadGreen.svg" alt="dowmload" />
  //                       </div>
  //                     </a>
  //                   </span>
  //                 </label>
  //                 <label class="selected-card__zip-popup-label">
  //                   <input type="checkbox" class="selected-card__zip-popup-input" />
  //                   <span class="selected-card__zip-popup-square"></span>
  //                   <span class="selected-card__zip-popup-text-box">
  //                     <span class="selected-card__zip-popup-input-title txt18 txt18_medium">PDF</span>
  //                     <a href="#" class="selected-card__zip-popup-input-svg-wrapper">
  //                       <div class="selected-card__zip-popup-input-svg-box">
  //                         <img src="./assets/images/downloadGreen.svg" alt="dowmload" />
  //                       </div>
  //                     </a>
  //                   </span>
  //                 </label>

  //                 <label class="selected-card__zip-popup-label">
  //                   <input type="checkbox" class="selected-card__zip-popup-input" />
  //                   <span class="selected-card__zip-popup-square"></span>
  //                   <span class="selected-card__zip-popup-text-box">
  //                     <span class="selected-card__zip-popup-input-title txt18 txt18_medium">WEBP</span>
  //                     <a href="#" class="selected-card__zip-popup-input-svg-wrapper">
  //                       <div class="selected-card__zip-popup-input-svg-box">
  //                         <img src="./assets/images/downloadGreen.svg" alt="dowmload" />
  //                       </div>
  //                     </a>
  //                   </span>
  //                 </label>
  //                 <label class="selected-card__zip-popup-label">
  //                   <input type="checkbox" class="selected-card__zip-popup-input" />
  //                   <span class="selected-card__zip-popup-square"></span>
  //                   <span class="selected-card__zip-popup-text-box">
  //                     <span class="selected-card__zip-popup-input-title txt18 txt18_medium">TIFF</span>
  //                     <a href="#" class="selected-card__zip-popup-input-svg-wrapper">
  //                       <div class="selected-card__zip-popup-input-svg-box">
  //                         <img src="./assets/images/downloadGreen.svg" alt="dowmload" />
  //                       </div>
  //                     </a>
  //                   </span>
  //                 </label>
  //                 <label class="selected-card__zip-popup-label">
  //                   <input type="checkbox" class="selected-card__zip-popup-input" />
  //                   <span class="selected-card__zip-popup-square"></span>
  //                   <span class="selected-card__zip-popup-text-box">
  //                     <span class="selected-card__zip-popup-input-title txt18 txt18_medium">PNG</span>
  //                     <a href="#" class="selected-card__zip-popup-input-svg-wrapper">
  //                       <div class="selected-card__zip-popup-input-svg-box">
  //                         <img src="./assets/images/downloadGreen.svg" alt="dowmload" />
  //                       </div>
  //                     </a>
  //                   </span>
  //                 </label>
  //                 <label class="selected-card__zip-popup-label">
  //                   <input type="checkbox" class="selected-card__zip-popup-input" />
  //                   <span class="selected-card__zip-popup-square"></span>
  //                   <span class="selected-card__zip-popup-text-box">
  //                     <span class="selected-card__zip-popup-input-title txt18 txt18_medium">ETC</span>
  //                     <a href="#" class="selected-card__zip-popup-input-svg-wrapper">
  //                       <div class="selected-card__zip-popup-input-svg-box">
  //                         <img src="./assets/images/downloadGreen.svg" alt="dowmload" />
  //                       </div>
  //                     </a>
  //                   </span>
  //                 </label>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </li>`; // Преобразуем строку HTML в элемент

  //   // Добавляем созданный элемент в родительский элемент
  //   // catalogWrapper.appendChild(swiperElement);
  //   catalogWrapper.appendChild(swiperElement);
  // });
}

export default catalogSelectedCard;
