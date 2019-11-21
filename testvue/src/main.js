import Vue from 'vue';
import App from './app.vue';
import Message from './message.vue';

Vue.component('app-message',Message);

new Vue({
  el: '#app',
  render: h => h(App)

});
