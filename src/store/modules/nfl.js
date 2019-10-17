import { getScoresByWeek } from "../../api/nfl";

const state = {
  games: []
};

const getters = {
  games: state => state.games
};

const actions = {
  async fetchGamesByWeek({ commit }) {
    const response = await getScoresByWeek("2019REG", "1");
    commit("fetchWeeksGames", response);
  }
};

const mutations = {
  fetchWeeksGames: (state, games) => (state.games = games)
};

export default {
  state,
  getters,
  actions,
  mutations
};
