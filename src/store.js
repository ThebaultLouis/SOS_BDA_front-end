import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "nourriture",
        image: "http://placehold.it/640x640",
        products: [
          {
            name:"Repas de liste",
            prix: 3,
            image: "http://placehold.it/640x640"
          },
          {
            name:"Repas de liste végé",
            prix: 3,
            image: "http://placehold.it/640x640"
          },
          {
            name:"Crêpe",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"Gaufre",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"frites",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"Onion Ring",
            prix: 0,
            image: "http://placehold.it/640x640"
          }
        ]
      },
      {
        name: "services",
        image: "http://placehold.it/640x640",
        products: [
          {
            name:"SOS Proto",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"SOS Ménage",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"SOS Livraison",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"SOS BugBusters",
            prix: 0,
            image: "http://placehold.it/640x640"
          }
        ]
      },
      {
        name: "Jeux",
        image: "http://placehold.it/640x640",
        products: [
          {
            name:"Le danseur",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"L'artiste",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"Le G@M3R",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"Le détective ",
            prix: 0,
            image: "http://placehold.it/640x640"
          },
          {
            name:"SOS Mystère",
            prix: 0,
            image: "http://placehold.it/640x640"
          }
        ]
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
