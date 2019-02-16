<template>
  <div class="">
    <ul class="listOfProducts">
    <li v-for="product in products" class="product" :key="product.name">
      <h1>{{product.name}}</h1>
      <!-- <a :href="`#${product.name}`">
        <img :src="product.image" alt="">
      </a> -->
      <img :src="product.image" alt="">
    </li>
  </ul>
    <div :id="product.name" class="" v-for="product in products" :key="product.name">
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


      <v-list v-if="product.saveurs">
          <v-list-tile
            v-for="saveur in product.saveurs"
            :key="saveur.name"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="saveur.name"></v-list-tile-title>
              <btn btnColor="btn btn-large btn-sucess"
              :cartIcon="true"
              @click.native="addProductToCartFlavour(product, saveur)">
              {{saveur.name}}
            </btn>
            </v-list-tile-content>


          </v-list-tile>
        </v-list>
        <v-btn v-else block color="secondary" dark @click.native="addProductToCart(product)">
        Add to cart</v-btn>
<!-- 
        <btn v-else btnColor="btn btn-large btn-sucess"
        :cartIcon="true"
        @click.native="addProductToCart(product)">
        Add to cart
      </btn> -->

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
    addProductToCartFlavour(product, saveur) {

      this.addProduct({
        id: saveur.id,
        name: product.name,
        image: product.image,
        prix: product.prix,
        saveur: saveur.name
      });
    }
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
