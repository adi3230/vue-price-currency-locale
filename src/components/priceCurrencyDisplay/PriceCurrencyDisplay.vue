<template src="./priceCurrencyDisplay.html"></template>

<script>
export default {
  name: 'PriceCurrencyDisplay',
  props: {
    locale: {
      type: String,
      default: 'de',
    },
    currency: {
      type: String,
      default: 'EUR',
    },
    priceValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    normalizedValue() {
      const { priceValue } = this;
      const formatOptions = {
        currency: this.currency,
        currencyDisplay: 'symbol',
        style: 'currency',
        useGrouping: true,
      };
      return (priceValue / 100).toLocaleString(this.locale, formatOptions);
    },
  },
};
</script>

<style scoped src="./priceCurrencyDisplay.scss" lang="scss">

</style>
