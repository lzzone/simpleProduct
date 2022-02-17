import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../languages/index.js';
Vue.use(VueI18n);

function i18n(langauge) {
  const vueI18n = new VueI18n({
    // locale: langauge || 'en', // 设置语言
    locale: langauge || 'en', // 设置语言
    messages // 语言包
  });
  return vueI18n;
}

export default i18n; 

  // const vueI18n = new VueI18n({
  //   // locale: langauge || 'en', // 设置语言
  //   locale: '', // 设置语言
  //   messages // 语言包
  // });

  // export default vueI18n;