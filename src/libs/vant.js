import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

Vue.prototype.$VueGlobal = {
  Toast,
}

export default {
  Toast,
}