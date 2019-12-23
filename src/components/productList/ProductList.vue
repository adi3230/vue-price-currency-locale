<template src="./productList.html"></template>

<script>
import PriceCurrencyDisplay from '../priceCurrencyDisplay';

export default {
  name: 'ProductList',
  components: {
    PriceCurrencyDisplay,
  },
  computed: {
    locale() {
      return 'de';
    },
    currency() {
      return 'CHF';
    },
  },
  methods: {
    getProductItems() {
      const mockProducts = [
        {
          id: 1,
          title: 'iPad 4 Mini',
          price: 50001,
          inventory: 2,
        },
        {
          id: 2,
          title: 'H&M T-Shirt White',
          price: 1099,
          inventory: 10,
        },
        {
          id: 3,
          title: 'Charli XCX - Sucker CD',
          price: 1999,
          inventory: 5,
        },
      ];
      return mockProducts;
    },
  },
};
</script>

<style scoped src="./productList.scss" lang="scss">

</style>
