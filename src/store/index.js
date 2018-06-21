import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/user/index';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    // Module to hold all the user data which is under ./modules.user
    user: userModule,
  },
  state: {

  },
});
