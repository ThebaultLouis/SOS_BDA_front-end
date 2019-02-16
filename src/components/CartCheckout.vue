<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
        <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
          <img :src="product.image" alt="" class="product-image">
          <h3 class="product-name">{{ product.name }} {{product.saveur ? product.saveur: ''}}</h3>
          <span>{{ product.prix ? `${product.prix} euros`:'Gratuit' }}</span>
          <button class="product-remove" @click="remove(index)">X</button>
        </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="/">Back to list of products</router-link>
    </div>
    <h3 class="total" v-if="hasProduct()">
      Total: {{ totalPrice() }} euros
    </h3>

    <v-form v-model="valid" v-if="hasProduct()">
      <v-container>
        <v-layout>
          <v-flex>
            <v-text-field
              v-model="prenom"

              :rules="prenomRules"
              label="Prénom"
              required
            ></v-text-field>
          </v-flex>

          <v-flex>
            <v-text-field
              v-model="nom"

              :rules="nomRules"
              label="Nom"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex
            xs12
            md6
          >
            <v-text-field
            v-model="numero"

            :rules="numeroRules"
            label="Numéro de téléphone"
            required
            ></v-text-field>

          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex
            xs12
            md6
          >
            <v-text-field
            v-model="adresse"

            :rules="adresseRules"
            label="Adresse"
            required
            ></v-text-field>

          </v-flex>
        </v-layout>
        <v-flex xs12>
          <v-textarea
            v-model="detail"

            :rules="detailRules"
            color="teal"
          >
            <div slot="label">
              Précisez votre commande <small>(Optionnel)</small>
            </div>
          </v-textarea>
        </v-flex>
      </v-container>

      <v-btn block :disabled="!valid" color="#2D9CDB" @click="submit()">
        {{loading ? 'Votre commande est en cours': 'Commander'}}
        <i v-if="loading" class="ml-5 fas fa-spin fa-spinner"></i>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'


export default {
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
  components: {

  },
  data: () => ({
    valid: false,
    prenom: '',
    loading: false,
    prenomRules: [
      v => !!v || 'Le prénom est requis'
    ],
    nom: '',
    nomRules: [
      v => !!v || 'Le nom est requis'
    ],
    adresse: '',
    adresseRules: [
      v => !!v || 'L’adresse est requise'
    ],
    numero: '',
    numeroRules: [
      v => !!v || 'Le numéro est requis'
    ],
    detail: '',
    detailRules: []
  }),
  methods: {
    ...mapActions([
      'removeProduct',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.prix, 0);
    },
    remove(index) {
      this.removeProduct(index);
    },
    submit() {
      this.loading = true;
      let commande = {
        prenom: this.prenom,
        nom: this.nom,
        numero: this.numero,
        adresse: this.adresse,
        detail: this.detail,
        articles: []
      }

      for (let article of this.getProductsInCart) {
        commande.articles.push(article.name)
      }

      axios.post('http://localhost:4242/orders', commande)
        .then(r => {
          this.loading = false;
          console.log(r)
        })
        .catch(e => {
          this.loading = false;
          console.log(e)
        })
    }
  },
}
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .1s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>
