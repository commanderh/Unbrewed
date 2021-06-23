import './DrinkCard.css'
const DrinkCard = ({ drink }) => {
	console.log(drink);
	return (
		<div className="drink-card">
			<img className="drink-card__img" src={drink.imageUrl}></img>
			<div className="drink-card__name">{drink.name}</div>
		</div>
	)
};

export default DrinkCard;