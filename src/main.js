import Vue from 'vue';
import Input from './modules/MyModule';
import message from './separate.vue';
import _ from 'lodash';

//const arr = _.concat([1, 2, 3], 4, [5]);
Input("<p>Type some animal or animals</p>",App);

Vue.component('app-message',message);
