<template>
  <header class="header">
    <a class="home" href="/">
    </a>
    <!-- <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">AllProducts</router-link>
        </li>

      </ul>
    </nav> -->
    <h1 class="sos display-2">S.O.S</h1>

    <btn btnColor="btn btn-small btn-info btn-popup"
    :cartIcon="true"
    @click.native="checkout()">
    Cart
    <span class="btn-circle" v-if="hasProduct()">
      {{ getProductsInCart.length }}
    </span>
  </btn>
  <transition name="appear">
    <popupcart class="cart" v-if="getPopupCart"/>
  </transition>

  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from '@/components/Btn';
import popupcart from '@/components/Popupcart';


export default {
  components: {
    btn,
    popupcart
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    checkout() {
      // this.showOrHiddenPopupCart();
      this.$router.push('/checkout')
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart',
    ]),
  },
};
</script>

<style scoped>
.home {
  margin: 0;
  height: 150px;
  width: 150px;
  background-image: url('/logo.png');
  /* background-image: url('https://res.cloudinary.com/dkxcax6es/image/upload/v1550164039/finiii1.png'); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.btn {
  margin-right: 20px;
}

  .header {
    width: 100%;
    height: 100px;
    background-color: #87CEEB;
    box-sizing: border-box;
    /* padding: .5em; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sos {
    text-align: center;
    padding: 0;
    margin: auto;
  }
  @media (max-width: 640px) {
    .sos {
      display: none;
    }
    .header {
      opacity: 0.8
    }
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
