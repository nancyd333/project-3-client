import { Link } from 'react-router-dom'
import './css/Navbar.css'
import 'bulma/css/bulma.min.css'

export default function Navbar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<>
			{/* if the user is logged in... */}
			{/* <Link to="/profile">profile</Link>
			
			<Link to="/"><span onClick={handleLogout}>logout</span></Link> */}

			<div className="navbar-end">
				<div className="navbar-item">
					<div className="buttons">
					<a className="button is-primary">
						<strong><Link to="/profile">profile</Link></strong>
					</a>
					<a className="button is-light">
						<Link to="/"><span onClick={handleLogout}>logout</span></Link>
					</a>
					</div>
				</div>
				</div>
		</>
	 )

	 const loggedOut = (
		<>
			{/* if the user is not logged in... */}
			<Link to="/register">
				register
			</Link>

			<Link to="/login">
				login
			</Link>
		</>
	 )

	return (
		<div>
			<nav className="navbar" role="navigation" aria-label="main navigation">

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
					<a className="navbar-item">
						<Link to="/"><p>MERN Mavericks</p></Link>
					</a>

					<a className="navbar-item">
						<Link to="/items"><p>Items</p></Link>
					</a>

					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
						More
						</a>

						<div className="navbar-dropdown">
						<a className="navbar-item">
							About
						</a>
						<a className="navbar-item">
							Jobs
						</a>
						<a className="navbar-item">
							Contact
						</a>
						<hr className="navbar-divider"/>
						<a className="navbar-item">
							Report an issue
						</a>
						</div>
					</div>
					</div>

					{currentUser ? loggedIn : loggedOut}

					{/* <div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
						<a class="button is-primary">
							<strong>Sign up</strong>
						</a>
						<a class="button is-light">
							Log in
						</a>
						</div>
					</div>
					</div> */}
				</div>
				</nav>
		</div>
	)
}