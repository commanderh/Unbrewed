import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ItemPage = () => {
	const { id } = useParams();
	const allDrinks = useSelector(state => Object.values(state.drinks))
	console.log(allDrinks);
	return (
		// <div>{drink.name}</div>
		<div>Hello</div>
	)
};

export default ItemPage;