import Vue from 'vue';
import Vuex from 'vuex';
import * as uz from '../common/js/uz';

Vue.use(Vuex);

const state = {
  headerTitle: '福利',
  menus: uz.NAME_TITILE,
  menuShow: false,
  loadingShow: false,
  news: 5
};
const getters = {
  getTitle: (state) => {
    return state.headerTitle;
  }
};
const mutations = {
  UPDATE_TITLE(state, title) {
    state.headerTitle = title;
    console.log(title);
  },
  UPDATE_SHOWMENU(state) {
    state.menuShow = !state.menuShow;
  },
  UPDATE_LOADING(state, data) {
    state.loadingShow = data;
  },
  UPDATE_NEWS(state) {
    state.news = 0;
  }
};
const actions = {
  increaseCounter({ dispatch, state }) {

  }
};


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
