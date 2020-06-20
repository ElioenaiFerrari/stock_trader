<template>
  <v-layout row wrap>
    <span
      v-show="!stocks.length"
      align-center
      class="display-1 font-weight-light darken-2"
    >
      Você não possui ações
    </span>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
import Stock from './Stock';

export default {
  components: {
    Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.getPortfolio;
    },
  },
};
</script>

<style></style>
