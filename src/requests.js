const apiKey = "daa060e6d09a034356b41ca6bf97816b";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${apiKey}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
};

export default requests;
