<template>
  <div class="">
    <ul class="listOfProducts">
    <li v-for="product in products" class="product">
      <h1>{{product.name}}</h1>
      <!-- <a :href="`#${product.name}`">
        <img :src="product.image" alt="">
      </a> -->
      <img :src="product.image" alt="">
    </li>
  </ul>
    <div :id="product.name" class="" v-for="product in products">
      <h1>{{product.name}}</h1>
      <v-divider></v-divider>
      <ul class="listOfProducts">
        <li v-for="(product, index) in product.products" :key="index" class="product">
          <img :src="product.image" alt="">
          <h2 class="product-name my-2 headline"
          @click="addCurrentProduct(product)">
          {{ product.name }}
        </h2>

        <div class="product-price title" style="text-align:center;">
          <span>{{ product.prix ? `${product.prix} euros`:'Gratuit' }} </span>
        </div>

        <btn btnColor="btn btn-large btn-sucess"
        :cartIcon="true"
        @click.native="addProductToCart(product)">
        Add to cart
      </btn>
    </li>
  </ul>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import btn from './Btn';

export default {
  props: ['products'],

  components: {
    btn,
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
h1::first-letter{
  text-transform: uppercase;
}
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }
  img {
    width: 100%;
    height: auto;
  }

  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }

  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-price {
    width: 100%;
    /* align-self: flex-start;
    display: flex;
    justify-content: space-between; */
    margin-bottom: .5em;
  }

</style>
