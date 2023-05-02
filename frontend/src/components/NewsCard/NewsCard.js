import './NewsCard.css';

const NewsCard = ({ card, onCardSave}) => {

  const handleSaveClick = () => {
    onCardSave(card);
  };
  const handleImageClick = () => {
    window.open(card.url, '_blank');
  };


  return (
    <div className="card" >

      <img className="card__img" src={card.urlToImage} alt={card.title} onClick={handleImageClick}/>
      <button
        aria-label="save article button"
        className="card__save-button"
        type="button"
        onClick={handleSaveClick}
      />
      <div className="card__info" onClick={handleImageClick}>
        <p className="card__date">{new Date(card.publishedAt).toLocaleString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  )}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__content">{card.description}</p>
        <p className="card__source">{card.source.name}</p>
      </div>

    </div>
  );
};
export default NewsCard;
