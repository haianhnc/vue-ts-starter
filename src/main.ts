import Vue from 'vue';
import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
