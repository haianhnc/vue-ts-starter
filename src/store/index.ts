import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

// const state: Record<string, any> = {

// };

// const mutations: Record<string, any> = {

// };

// const actions: Record<string, any> = {

// };

export default new Vuex.Store({
  strict: true,
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    user,
  },
});
