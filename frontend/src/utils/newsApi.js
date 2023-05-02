export const getNews = (NEWS_API_KEY) => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      return data.articles;
    })
    .catch((err) => {
      console.error('Error. The request failed', err);
    });
};
export const onSearchQuery = (query,NEWS_API_KEY) => {
  // Fetch the news data based on the search query
  fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
