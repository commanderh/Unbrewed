import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import drinksReducer from "../../store/drinks";

const ItemPage = () => {
	const { id } = useParams();
	const drinkItem = useSelector(state => state.drinks[id]);
	console.log(drinkItem);

	//Edit Button event handler
	const editHandler = () => {
		return;
	};

	//Delete Button event handler
	const deleteHandler = () => {
		return;
	};
	return (
		<div className="drink-container">
			<div>
				<img src={drinkItem.imageUrl}></img>
			</div>
			<div>
				<div>{drinkItem.name}</div>
			</div>
			<div>
				<div>{drinkItem.content}</div>
			</div>
			<button onClick={editHandler}>Edit</button>
			<button onClick={deleteHandler}>Delete</button>
		</div>
	)
};

export default ItemPage;