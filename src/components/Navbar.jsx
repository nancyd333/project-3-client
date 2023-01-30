import { Link } from 'react-router-dom'
import './css/Navbar.css'
import 'bulma/css/bulma.min.css'

export default function Navbar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<div>
			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
				<div className="navbar-item">

					<div className="buttons">
						<a className="button is-primary" href='/newItem'>
							<strong>Share Item</strong>
						</a>

						<a className="button is-primary" href='/profile'>
							<strong>Profile</strong>
						</a>

						<a className="button is-light" href='/'>
							Logout
						</a>
					</div>

				</div>
				</div>
			</div>
		</div>
	 )

	const loggedOut = (
		<div>
			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
				<div className="navbar-item">
					<div className="buttons">
					<a className="button is-primary" href='/register'>
						<strong>Sign up</strong>
					</a>
					<a className="button is-light" href='/login'>
						Log in
					</a>
					</div>
				</div>
				</div>
			</div>
			
		</div>
	 )

	return (
		<div>
			<nav className="color" role="navigation" aria-label="main navigation">
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
					<a className="navbar-item" href='/'>
						MERN Mavericks
					</a>

					<a className="navbar-item" href='/items'>
						Items
					</a>
					</div>

					{currentUser ? loggedIn : loggedOut}

				</div>
			</nav>
		</div>
	)
}