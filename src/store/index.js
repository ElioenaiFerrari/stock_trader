import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './stocks'
import portfolio from './portfolio'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
})


export default store