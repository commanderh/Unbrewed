import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import drinksReducer, { deleteDrink } from "../../store/drinks";
import { useHistory } from "react-router";
import EditDrinkModal from "../EditDrinkModal";
import Reviews from "../Reviews";
import './ItemPage.css';

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

	const handleSubmit = e => {
		return;
	};
	return (
		<>
			{drinkItem && (
				<div className="item-container">
					<div className="drink-container">
						<div className="image-container">
							<img src={drinkItem.imageUrl}></img>
						</div>
						<div className="text-container">
							<div className="container-description">
								<h1>{drinkItem.name}</h1>
								<p>{drinkItem.content}</p>
							</div>
							{/* <div className="container-content">{drinkItem.content}</div> */}
							<div className="container-buttons">
								<EditDrinkModal drinkItem={drinkItem} />
								<button onClick={deleteHandler}>Delete</button>
							</div>
						</div>
					</div>
					<div className="reviews-container">
						<form className="add-review-container">
							<textarea placeholder="Add Review"></textarea>
							<button onSubmit={handleSubmit}>Add Review</button>
						</form>
						{/* {drinkItem && (
							drinkItem.DrinkReviews.map((review, i) => (<Reviews key={i} review={review}/>))
						)} */}
					</div>
				</div>
				)}
		</>
	)
};

export default ItemPage;