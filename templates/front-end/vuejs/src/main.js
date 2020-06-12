import Vue from 'vue';
import App from './App.vue';
import apolloProvider from './apollo-setup';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  apolloProvider,
}).$mount('#app');
