import axios from "axios";
const baseUrl = `localh`;

const createGame = async gameData => {
  const url = `${baseUrl}/`;
  try {
    const response = await axios.post(url, gameData);
    return response;
  } catch (err) {
    return err;
  }
};

export { createGame };
