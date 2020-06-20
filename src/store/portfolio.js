export default {
  state: {
    funds: 10000,
    stocks: [],
  },

  mutations: {
    buyStock(state, {
      stockId,
      stockPrice,
      quantity
    }) {
      const record = state.stocks.find(stock => stock.id === stockId);

      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity,
        });
      }

      state.funds -= stockPrice * quantity;
    },

    sellStock(state, {
      stockId,
      stockPrice,
      quantity
    }) {
      const record = state.stocks.find(stock => stock.id === stockId);


      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }

      state.funds += quantity * stockPrice;
    }
  },

  actions: {
    sellStock({
      commit
    }, payload) {
      commit('sellStock', payload)
    }
  },

  getters: {
    getPortfolio(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.getStocks.find(e => e.id === stock.id);

        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        }
      });
    },

    getFunds(state) {
      return state.funds;
    }
  }
}