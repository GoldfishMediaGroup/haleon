import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';
import { scroll } from '../utils/scroll';

import popup from '../utils/popup';
import form from '../utils/form';
import fancybox from '../utils/fancybox';

import catalogSelectedCard from '../components/_catalogSelectedCard';
import catalogMainTabs from '../components/_catalogMainTabs';
import catalogSelectedTabs from '../components/_catalogSelectedTabs';
import cardDetail from '../components/_cardDetail';
import catalogPagination from '../components/_catalogPagination';
import catalogFiltes from '../components/_catalogFilters';


export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    fancybox();
  } catch {}
  try {
    catalogSelectedCard();
  } catch {}
  try {
    catalogMainTabs();
  } catch {}
  try {
    catalogSelectedTabs();
  } catch {}
  try {
    cardDetail();
  } catch {}
  try {
    catalogPagination();
  } catch {}
  try {
    catalogFiltes();
  } catch {}

});
