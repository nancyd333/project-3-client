import React from 'react';
import 'bulma/css/bulma.min.css';

export default function Navbar({ currentUser, handleLogout }) {
	const loggedIn = (
		<div className="navbar-item">
			<div className="buttons">
				<a className="button is-light" href='/newItem'>
					<strong>Share Item</strong>
				</a>

				<a className="button is-light" href='/' onClick={handleLogout}>
					<strong>Logout</strong>
				</a>
			</div>
		</div>
	);

	const loggedOut = (
		<div className="navbar-item">
			<div className="buttons">
				<a className="button is-light" href='/register'>
					<strong>Sign up</strong>
				</a>
				<a className="button is-light" href='/login'>
					Log in
				</a>
			</div>
		</div>
	);

	return (
		<nav className="navbar is-light" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href='/'>
						<strong>MERN Mavericks</strong>
					</a>

					<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item" href='/items'>
							<strong>Items</strong>
						</a>
					</div>

					<div className="navbar-end">
						{currentUser ? loggedIn : loggedOut}
					</div>
				</div>
			</div>
		</nav>
	);
}


