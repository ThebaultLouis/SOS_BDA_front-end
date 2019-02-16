import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "nourriture",
        image: "/products/nourriture.jpg",
        products: [
          {
            name:"Wok au poulet",
            prix: 3,
            image: "/products/wok_au_poulet.jpeg"
          },
          {
            name:"Wok végétarien",
            prix: 3,
            image: "/products/wok_vegetarien.jpeg"
          },
          {
            name:"Crêpe",
            prix: 0,
            image: "/products/crêpe.jpg"
          },
          {
            name:"Gaufre",
            prix: 0,
            image: "/products/gaufres.jpg"
          },
          {
            name:"frites",
            prix: 0,
            image: "/products/frites.jpg"
          },
          {
            name:"Onion Rings",
            prix: 0,
            image: "/products/onion-rings.jpg"
          }
        ]
      },
      {
        name: "services",
        image: "/products/service.jpg",
        products: [
          {
            name:"SOS détente",
            prix: 0,
            image: "/products/detente.jpg"
          },
          {
            name:"SOS Ménage",
            prix: 0,
            image: "/products/menage.jpg"
          },
          {
            name:"SOS Livraison",
            prix: 0,
            image: "/products/ubereats.png"
          },
          {
            name:"SOS BugBusters",
            prix: 0,
            image: "/products/bugBusters.png"
          }
        ]
      },
      {
        name: "Jeux",
        image: "http://placehold.it/360x360",
        products: [

          {
            name:"L'artiste",
            prix: 0,
            image: "/products/artiste.jpg"
          },

          {
            name:"Le détective",
            prix: 0,
            image: "/products/detective.jpg"
          },
          {
            name:"SOS Mystère",
            prix: 0,
            image: "/products/random.jpg"
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
