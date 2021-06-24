import { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addDrink } from "../../store/drinks";

const AddDrink = () => {
	const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors([]);
    // return dispatch(sessionActions.login({ credential, password }))
    //   .catch(async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   });
		const newDrink = await dispatch(addDrink({name, description, imageUrl}));
		history.push(`/drinks/${newDrink.id}`)
  }

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<ul>
					{errors.map((error, idx) => <li key={idx}>{error}</li>)}
				</ul>
			</div>
			<div>
				<label>Enter Name</label>
				<input type="text" value={ name } onChange={e => setName(e.target.value)}></input>
			</div>
			<div>
				<label>Description</label>
				<input type="text" value={ description } onChange={e => setDescription(e.target.value)}></input>
			</div>
			<div>
				<label>Image URL</label>
				<input type="text" value={ imageUrl } onChange={e => setImageUrl(e.target.value)}></input>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default AddDrink;
