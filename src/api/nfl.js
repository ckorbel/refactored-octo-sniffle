/* eslint-disable no-console */
import axios from "axios";

axios.defaults.headers.common["Ocp-Apim-Subscription-Key"] =
  process.env.VUE_APP_SPORTS_DATA_API_KEY;

const getScoresByWeek = async (season, week) => {
  const url = `${process.env.VUE_APP_ROOT_URL}/ScoresByWeek/${season}/${week}`;
  const response = await axios.get(url);
  return response.data;
};

export { getScoresByWeek };
