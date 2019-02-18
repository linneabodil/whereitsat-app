import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: 1,
    totalCost: 0,
    events: []
  },
  mutations: {
    inc(state) {
      return state.tickets++
    },
    dec(state) {
      if (state.tickets > 1) {
        return state.tickets--;
      }
    },
    insertEvents(state, events) {
      state.events = events;
    }
  },
  actions: {
    async getEvents(data) {
        let events = await axios.get('http://localhost:3000/events')
        data.commit('insertEvents', events.data)
    }
  }
})
