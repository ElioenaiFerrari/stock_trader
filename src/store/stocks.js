import stocks from '@/database/stocks'

export default {
  state: {
    stocks: []
  },

  mutations: {
    setStocks(state, payload) {
      state.stocks = payload;
    }
  },

  actions: {
    buyStock({
      commit
    }, payload) {
      commit('buyStock', payload);
    },

    initStocks({
      commit
    }, ) {
      commit('setStocks', stocks);
    }
  },

  getters: {
    getStocks(state) {
      return state.stocks;
    }
  }
}