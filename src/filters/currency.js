import Vue from 'vue'

export default Vue.filter('currency', value => {
  return `R$ ${value.toLocaleString()}`;
})