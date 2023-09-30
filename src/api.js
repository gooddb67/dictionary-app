import axios from "axios";

const searchWord = async (word) => {
  const response = await axios({
    method: "get",
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });
  return response;
};

export default searchWord;
