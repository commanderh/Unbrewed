import { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editDrink } from "../../store/drinks";
import { useParams } from "react-router";

const EditDrink = ({ drinkItem }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();
	const [name, setName] = useState(drinkItem.name);
	const [description, setDescription] = useState(drinkItem.content);
	const [imageUrl, setImageUrl] = useState(drinkItem.imageUrl);
	const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
		const newDrink = await dispatch(editDrink({ id, name, description, imageUrl }));
		history.push(`/drinks/${newDrink.id}`)
  }

	//TODO: Closes the modal
	const handleCancel = e => {

	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<ul>
					{errors.map((error, idx) => <li key={idx}>{error}</li>)}
				</ul>
			</div>
			<div>
				<img src={imageUrl} width="50px" height="50px"></img>
			</div>
			<div>
				<label>Name</label>
				<input type="text" value={ name } onChange={e => setName(e.target.value)}></input>
			</div>
			<div>
				<label>Description</label>
				<textarea type="text" value={ description } onChange={e => setDescription(e.target.value)}></textarea>
			</div>
			<div>
				<label>Image URL</label>
				<input type="text" value={ imageUrl } onChange={e => setImageUrl(e.target.value)}></input>
			</div>
			<button type="submit">Submit</button>
			<button onClick={handleCancel}>Cancel</button>
		</form>
	);
}

export default EditDrink;
