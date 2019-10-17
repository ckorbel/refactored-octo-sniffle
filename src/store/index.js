import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";
import nfl from "./modules/nfl";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    nfl
  }
});
