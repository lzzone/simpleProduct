import Vue from 'vue';
import app from './app.vue';
import './libs/vant.js';
import getI18n from './libs/language.js';

const languageType = 'en'; // en 或者 tr
const i18n = getI18n(languageType);

Vue.prototype.$GData = {
}



new Vue({
  el: '#starchat-applz',
  render: h => h(app),
  i18n,
})