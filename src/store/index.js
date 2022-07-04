import Vue from 'vue'
import Vuex from 'vuex'
import {loginUser} from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    LOGIN({ commit }, userData) {
      loginUser(userData)
          .then(()=>{
          commit('setUsername', userData.username);
          localStorage.setItem('username',userData.username);
          },
      );
    }
  },
  modules: {
  }
})
