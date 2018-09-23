import Vue from 'vue';
// import Vuex from 'vuex';
// import VueRouter from 'vue-router';
import App from './src/App';

window.addEventListener('load', () => {
  const el = document.createElement('app');
  document.body.appendChild(el);
  // eslint-disable-next-line no-new
  new Vue({ el, components: { App } });
});
