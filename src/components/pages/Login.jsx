import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import '../css/NewItem.css'
import 'bulma/css/bulma.min.css'
import { Link } from 'react-router-dom'

export default function Login({ currentUser, setCurrentUser }) {
	// state for the controlled form
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

	// submit event handler
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post form data to the backend
			const reqBody = {
				email, 
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, reqBody)

			// save the token in localstorage
			const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			setCurrentUser(decoded)

		} catch (err) {
			console.warn(err)
			if (err.response) {
				setMsg(err.response.data.msg)
			}
		}
 	}

	// conditionally render a navigate component
	if (currentUser) {
		return <Navigate to="/items" />
	}

	return (
        <div class="columns is-centered">
        <div class = "column is-5">
                <div class = "box">
			<h2 class="title">Login</h2>

			<p>{msg}</p>

			<form onSubmit={handleSubmit}>
			<div class="field">
				<label class="label" htmlFor='email'>Email:</label>
				<input 
					class="input is-medium"
					type="email"
					id="email"
					placeholder='your email...'
					onChange={e => setEmail(e.target.value)}
					value={email}
				/>
			</div>
			<div class="field">
				<label class="label" htmlFor='password'>Password:</label>
				<input 
					class="input is-medium"
					type="password"
					id="password"
					placeholder='password...'
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
			</div>
				<button class="button is-medium is-dark m-1" type="submit">Login</button>
				<Link to={'/items'}>
     				 <button class="button is-medium is-dark m-1">
        				Cancel
     				 </button>
      			</Link>
			</form>
		</div>
		</div>
		</div>
	)
}