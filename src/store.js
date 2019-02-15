import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 69
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 160
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 78
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 80
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 171
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 61
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 109
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 179
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 55
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 146
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 120
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 94
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 102
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 60
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 38
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 163
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 167
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 64
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 68
      },
      {
        'name': 'Crêpe au chocolat',
        'image': 'http://placehold.it/640x480',
        'price': 59
      }
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {

    getAllProducts: state => state.products,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
