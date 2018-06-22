import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
  },
  mutations: {
    ADD_USER_DETAILS(state, payload) {
      state.user.push(payload);
      console.log(`Mutation data: ${payload}`);
    },
  },
});
