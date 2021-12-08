import { createStore } from 'vuex'
import MessengerStore from './messenger/messengerStore';

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async selectUser({ commit }, email, password) {
      try {
        const response = await fetch(`http://localhost:8000/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            email: email,
            password: password
          }
        });
        const json = await response.json();
        commit('setUser', json);
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  modules: {
    messages: MessengerStore
  }
})
