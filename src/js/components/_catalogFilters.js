window.$ = window.jQuery = require('jquery');
import Pikaday from 'pikaday';
import moment from 'moment';

function catalogFiltes() {

  $('.catalog__filters-form-box').on('input', '.catalog__filters-search-input', function () {
    let value = $(this).val().toLowerCase();
    $(this)
      .closest('.catalog__filters-form-box')
      .find('.catalog__filters-label')
      .filter(function () {
        $(this).toggle($(this).find('.catalog__filters-input-title').text().toLowerCase().indexOf(value) > -1);
      });
    if (value) {
      $(this).closest('.catalog__filters-form-box').find('.catalog__filters-search-clear-btn').fadeTo(100, 1); // Показываем кнопку
    } else {
      $(this).closest('.catalog__filters-form-box').find('.catalog__filters-search-clear-btn').fadeTo(100, 0); // Скрываем кнопку
    }
  });

  $('.catalog__filters-form-box').on('click', '.catalog__filters-search-clear-btn', function () {
    $(this).closest('.catalog__filters-form-box').find('.catalog__filters-search-input').val('');
    $(this).closest('.catalog__filters-form-box').find('.catalog__filters-label').show(); // или .toggle(true);
    $(this).fadeTo(100, 0);
  });


  moment.locale('ru');

  function formatDate(date) {
    return moment(date).format('MMMM YYYY'); // 'месяц 2025'
  }

  const options = {
    previousMonth: 'Предыдущий месяц',
    nextMonth: 'Следующий месяц',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  };

  const picker1 = new Pikaday({
    field: document.getElementById('datepicker1'),
    format: 'DD.MM.YYYY',
    i18n: options,
    onSelect: function (date) {
      const formattedDate = formatDate(date);
      document.getElementById('datepicker1').value = formattedDate;
      picker2.setMinDate(date);
      const secondDate = moment(document.getElementById('datepicker2').value, 'MMMM YYYY');
      if (secondDate.isValid() && date > secondDate) {
        document.getElementById('datepicker2').value = ''; // Очищаем второй инпут
      }
    }
  });


  const picker2 = new Pikaday({
    field: document.getElementById('datepicker2'),
    format: 'DD.MM.YYYY',
    i18n: options,
    onSelect: function (date) {
      const formattedDate = formatDate(date);
      document.getElementById('datepicker2').value = formattedDate;
    }
  });
}

export default catalogFiltes;
