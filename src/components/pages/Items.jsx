import axios from 'axios'
import { useState, useEffect } from 'react'
import '../css/NewItem.css'
import 'bulma/css/bulma.min.css'

import { Link } from 'react-router-dom'

// page will essentially show info of all items
export default function Items({ items, setItems, currentUser }) {

	// will show all items
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/item`)
				console.log(response.data)
				setItems(response.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchItems()
	}, [])

	const itemComponents = items.map(item => {

		if (!currentUser) {
			// if not logged in at all, still able to see all items
			return (
			
				

				// creates 3x3 column of all items
				<div class="column is-3 box m-4" >
					<div key={`${item._id}`}>
						<h1 class="title">{item.name}</h1>

						<div>
							<figure class="image is-16by9">
								<iframe
									class="has-ratio"
									width="312"
									height="219"
									src={item.url.slice(0, 24) + 'embed/' + item.url.slice(32)}
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								>
								</iframe>
							</figure>

						</div>


						<div>
							<p>price: {item.price}</p>
							<p>category: {item.category}</p>
						</div>

					</div>
				</div>


			)
		} else if (currentUser.id === item.userId) {
			// if user is logged in and has created an item, will see EDIT BUTTON
			return (

				// creates 3x3 column of all items
				<div class="column is-3 box m-4" >
					<div key={`${item._id}`}  >
						<h1 class='title'>{item.name}</h1>

						<div >
							<figure class="image is-16by9">
								<iframe
									class="has-ratio"
									width="312"
									height="219"
									src={item.url.slice(0, 24) + 'embed/' + item.url.slice(32)}
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								>
								</iframe>
							</figure>

						</div>

						<div>
							<p>price: {item.price}</p>
							<p>category: {item.category}</p>
						</div>

						{/* edit button and redirects you */}
						<div>
							<Link to={`/editItem/${item._id}`} >
								<button class="button is-small is-dark" >

									Edit
								</button>
							</Link>
						</div>


					</div>
				</div>



			)

		} else if (currentUser.id !== item.userId) {


			return (
				// if logged in and not created that item, DO NOT SEE EDIT BUTTON
				
				<div class="column is-3 box m-4" >
					<div key={`${item._id}`}  >
						<h1 class='title'>{item.name}</h1>

						<div class=' is-2 '>
							<figure class="image is-16by9">
								<iframe
									class="has-ratio"
									width="312"
									height="219"
									src={item.url.slice(0, 24) + 'embed/' + item.url.slice(32)}
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								>
								</iframe>
							</figure>

						</div>

						<div>
							<p>price: {item.price}</p>
							<p>category: {item.category}</p>
						</div>
					</div>
				</div>


			)

		}
	})


	return (
		<div class="columns is-5 is-multiline is-centered" >
			{itemComponents}
			
		</div>
	)

}
