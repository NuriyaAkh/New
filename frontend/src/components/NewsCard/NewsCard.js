import './NewsCard.css'
const NewsCard = ({ card, onCardSave, onCardClick }) => {
  const handleSaveClick = () => {
    onCardSave(card);
  };
  const handleImageClick = () => {
    onCardClick(card);
  };
  return (
    <div className="card">
      <img className="card__img" src={card.link} alt={card.name} onClick={handleImageClick} />
      <button
        aria-label="save article button"
        className="card__save-button"
        type="button"
        onClick={handleSaveClick}
      />
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