import { optionsType } from "../Interfaces";

const options: optionsType = {
  headers: {
    "x-access-token":
      "coinrankingf11dad45c3f471dfaebdc726bc4719042b2b2fdfbf0f22ac",
  },
};
const API_URL = "https://api.coinranking.com/v2/coins";

export async function getCrypto() {
  const res = await fetch(API_URL, options);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();

  return data;
}
