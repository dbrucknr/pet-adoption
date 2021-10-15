import { createStore } from 'vuex'
import MessengerStore from './messenger/messengerStore';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  },
  modules: {
    messages: MessengerStore
  }
})
