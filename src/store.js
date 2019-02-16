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
            id: 10,
            name:"Wok au poulet",
            prix: 3,
            image: "/products/wok_au_poulet.jpeg",
            saveurs: null
          },
          {
            id: 20,
            name:"Wok végétarien",
            prix: 3,
            image: "/products/wok_vegetarien.jpeg",
            saveurs: null
          },
          {
            name:"Crêpe",
            prix: 0,
            image: "/products/crêpe.jpg",
            saveurs: [
              {
                id: 30,
                name: "Nature"
              },
              {
                id: 31,
                name: "Sucre"
              },
              {
                id: 32,
                name: "Nutella"
              },
              {
                id: 33,
                name: "Confiture"
              }
            ]
          },
          {
            name:"Gaufre",
            prix: 0,
            image: "/products/gaufres.jpg",
            saveurs: [
              {
                id: 40,
                name: "Nature"
              },
              {
                id: 41,
                name: "Sucre"
              },
              {
                id: 42,
                name: "Nutella"
              },
              {
                id: 43,
                name: "Confiture"
              }
            ]
          },
          {
            id: 50,
            name:"frites",
            prix: 0,
            image: "/products/frites.jpg",
            saveurs: null
          },
          {
            id: 60,
            name:"Onion Rings",
            prix: 0,
            image: "/products/onion-rings.jpg",
            saveurs: null
          }
        ]
      },
      {
        name: "services",
        image: "/products/service.jpg",
        products: [
          {
            id: 70,
            name:"SOS détente",
            prix: 0,
            image: "/products/detente.jpg",
            saveurs: null
          },
          {
            id: 80,
            name:"SOS Ménage",
            prix: 0,
            image: "/products/menage.jpg",
            saveurs: null
          },
          {
            id: 90,
            name:"SOS Livraison",
            prix: 0,
            image: "/products/ubereats.png",
            saveurs: null
          },
          {
            id: 100,
            name:"SOS BugBusters",
            prix: 0,
            image: "/products/bugBusters.png",
            saveurs: null
          }
        ]
      },
      {
        name: "Jeux",
        image: "http://placehold.it/360x360",
        products: [

          {
            id: 110,
            name:"L'artiste",
            prix: 0,
            image: "/products/artiste.jpg",
            saveurs: null
          },
          {
            id: 120,
            name:"Le gamer",
            prix: 0,
            image: "/products/artiste.jpg",
            saveurs: null
          },
          {
            id: 130,
            name:"Le détective",
            prix: 0,
            image: "/products/detective.jpg",
            saveurs: null
          },
          {
            id: 140,
            name:"SOS Mystère",
            prix: 0,
            image: "/products/random.jpg",
            saveurs: null
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
