import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import drinksReducer, { deleteDrink } from "../../store/drinks";
import { useHistory } from "react-router";
import EditDrinkModal from "../EditDrinkModal";
import Reviews from "../Reviews";

const ItemPage = () => {
	const { id } = useParams();
	const drinkItem = useSelector(state => state.drinks[id]);
	const dispatch = useDispatch();
	const history = useHistory();
	console.log(drinkItem);

	//Delete Button event handler
	const deleteHandler = (e) => {
		let confirmDelete = window.confirm("Are you sure you want to delete?")
		if (confirmDelete) {
			dispatch(deleteDrink(drinkItem.id));
			history.push("/drinks");
		}
		history.push(`/drinks/${drinkItem.id}`);
	};
	return (
		<>
			{drinkItem && (
				<div className="item-container">
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
						<EditDrinkModal drinkItem={drinkItem} />
						<button onClick={deleteHandler}>Delete</button>
					</div>
					<div className="reviews-container">
						{/* {drinkItem && (
							drinkItem.DrinkReviews.map((review, i) => (<Reviews key={i} review={review}/>))
						)} */}
						<button>Add Review</button>
					</div>
				</div>
				)}
		</>
	)
};

export default ItemPage;