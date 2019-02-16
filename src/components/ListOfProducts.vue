<template>
  <div>
    <div :id="product.name" class="" v-for="product in products" :key="product.name">
      <h1 class="ml-4">{{product.name}}</h1>
      <v-divider></v-divider>

      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1 sm4 offset-sm0 v-for="(product, index) in product.products" :key="index" class="product">
            <v-card>
              <v-img
                :src="product.image"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0" @click="addCurrentProduct(product)">{{ product.name }}</h3>
                  <div>{{ product.prix ? `${product.prix} euros`:'Gratuit' }}</div>
                </div>
              </v-card-title>

              <v-list v-if="product.saveurs">
                <v-list-tile
                  v-for="saveur in product.saveurs"
                  :key="saveur.name"
                >
                  <v-list-tile-content>
                    <v-btn block @click.native="addProductToCartFlavour(product, saveur)">
                      {{saveur.name}}
                    </v-btn>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-list v-else>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-btn block @click.native="addProductToCart(product)">Ajouter au panier</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
</style>
