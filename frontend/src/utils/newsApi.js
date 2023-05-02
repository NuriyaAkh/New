export const getNews = (NEWS_API_KEY) => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      return data.articles;
    })
    .catch((err) => {
      console.error("Error. The request failed", err);
    });
};
