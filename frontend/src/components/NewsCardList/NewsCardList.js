import NewsCard from '../NewsCard/NewsCard';

import './NewsCardList.css';
const NewsCardList = ({ cards, onCardSave, onCardClick, handleShowMore }) => {
  console.log(cards);
  return (
    <div className='list__container'>
      <p className='list__text'>Search results</p>
      <div className="list__content">
        {
          cards.map((card)=>(
<NewsCard key={card.url} card={card} onCardSave={onCardSave} onCardClick={onCardClick} />
          ))
        }


      </div>
      <button type="button" className='list__button' onClick={handleShowMore}>
        Show more
      </button>
    </div>
  );
};
export default NewsCardList;
