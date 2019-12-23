import Vue from 'vue';
import ProductList from './components/productList';

Vue.config.productionTip = false;

new Vue({
  render: h => h(ProductList),
}).$mount('#app');
