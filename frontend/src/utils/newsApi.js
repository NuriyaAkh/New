export const getNews = (NEWS_API_KEY) => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=78da98d90d0a4ac29291a693bcb7b83e`)
    .then((res) => res.json())
    .then((data) => {
      return data.articles;
    })
    .catch((err) => {
      console.error("Error. The request failed", err);
    });
};
