import axios from "axios";

const state = {
  game: {}
};

const getters = {
  game: game => game
};

const actions = {
  async createGame({ commit }, gameData) {
    const response = await axios.post("/endppint", gameData);
    commit("createGame", response.data);
  }
};

const mutations = {
  createGame: (state, game) => (state.game = game)
};

export default {
  state,
  getters,
  actions,
  mutations
};
