import './NewsCard.css'
import BookmarkIcon from '../Icons/BookmarkIcon';

const NewsCard = ({ card, onCardSave, onCardClick,fill,stroke }) => {
  const handleSaveClick = () => {
    onCardSave(card);
  };
  const handleImageClick = () => {
    onCardClick(card);
  };
  return (
    <div className="card" onClick={handleImageClick}>
      <img className="card__img" src={card.link} alt={card.name}  />
      <button
        aria-label="save article button"
        className="card__save-button"
        type="button"
        onClick={handleSaveClick}
      ><BookmarkIcon fill="none" stroke="black"/></button>
      <div className="card__info">
        <p className="card__date">{card.date}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__content">{card.content}</p>
        <p className="card__source">{card.source}</p>
      </div>
    </div>
  );
};
export default NewsCard;