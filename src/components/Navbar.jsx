import './css/Navbar.css'
import 'bulma/css/bulma.min.css'

export default function Navbar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<div>
			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
				<div className="navbar-item">

					<div className="buttons">
						<a className="button is-light" href='/newItem'>
							<strong>Share Item</strong>
						</a>

						{/* <a className="button is-light" href='/profile'>
							<strong>Profile</strong>
						</a> */}

						<a className="button is-light" href='/' onClick={handleLogout}>
							<strong>Logout</strong>
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
					<a className="button is-light" href='/register'>
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
						<strong>MERN Mavericks</strong>
					</a>

					<a className="navbar-item" href='/items'>
						<strong>Items</strong>
					</a>
					</div>

					{currentUser ? loggedIn : loggedOut}

				</div>
			</nav>
		</div>
	)
}