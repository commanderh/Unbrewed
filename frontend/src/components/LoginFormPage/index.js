import { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';


const LoginFormPage = () => {
	const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
	const [credential, setcredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<ul>
					{errors.map((error, idx) => <li key={idx}>{error}</li>)}
				</ul>
			</div>
			<div>
				<label>Enter email or username</label>
				<input type="text" value={ credential } onChange={e => setcredential(e.target.value)}></input>
			</div>
			<div>
				<label>Password</label>
				<input type="text" value={ password } onChange={e => setPassword(e.target.value)}></input>
			</div>
			<button type="submit">Log In</button>
		</form>
	);
}

export default LoginFormPage;
