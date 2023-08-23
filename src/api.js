import axios from "axios";

const searchWord = async (word) => {
  const response = await axios({
    method: "get",
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  });

  return response;
};

export default searchWord;
