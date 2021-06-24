import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import drinksReducer, { deleteDrink } from "../../store/drinks";
import { useHistory } from "react-router";
import EditDrinkModal from "../EditDrinkModal";

const ItemPage = () => {
	const { id } = useParams();
	const drinkItem = useSelector(state => state.drinks[id]);
	const dispatch = useDispatch();
	const history = useHistory();
	console.log(drinkItem);

	//Edit Button event handler
	const editHandler = () => {
		return;
	};

	//Delete Button event handler
	const deleteHandler = (e) => {
		const deletedDrink = dispatch(deleteDrink(drinkItem.id));
		history.push("/drinks");
	};
	return (
		<>
			{drinkItem && (<div className="drink-container">
				<div>
					<img src={drinkItem.imageUrl}></img>
				</div>
				<div>
					<div>{drinkItem.name}</div>
				</div>
				<div>
					<div>{drinkItem.content}</div>
				</div>
				<EditDrinkModal drinkItem={drinkItem}/>
				<button onClick={deleteHandler}>Delete</button>
			</div>)}
		</>
	)
};

export default ItemPage;