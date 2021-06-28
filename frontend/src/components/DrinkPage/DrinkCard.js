import { Link } from 'react-router-dom';
import './DrinkCard.css'
const DrinkCard = ({ drink }) => {
	console.log(drink);
	return (
		<Link className= "drink-card" to={`/drinks/${drink.id}`}>
				<img className="drink-card__img" src={drink.imageUrl}></img>
				<div className="drink-card__name">{drink.name}</div>
		</Link>
	)
};

export default DrinkCard;