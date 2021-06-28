import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import AddDrinkModal from '../AddDrinkModal';
import logo from '../../images/unbrewed-logo.png';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
				<SignupFormModal />
      </>
    );
  }

  return (
		<nav className="nav__container">
			<div nav__container-logo>
				<NavLink exact to="/">
					<img className="logo-pic" src={logo}></img>
				</NavLink>
			</div>
			<div className="nav__container-links">
        <NavLink className="nav-links" exact to="/drinks">Drinks</NavLink>
				{/* TODO: Add stores later */}
				<NavLink className="nav-links" to="/stores">Stores</NavLink>
        {sessionUser && <AddDrinkModal/>}
			</div>
			<div className="nav__container-profile-login">
        {isLoaded && sessionLinks}
			</div>
		</nav>
  );
}

export default Navigation;