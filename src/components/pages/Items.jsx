import axios from 'axios'
import { useState, useEffect } from 'react'
import '../css/Item.css'

// page will essentially show info of all items
// then if clicked on will send user to new page with item info
// if user has authority of that item, means that they can edit or delete that item 
export default function Items() {

	// store details of items and list all items
	const [items, setItems] = useState([])
	// ???? need something that shows us the id of whats been clicked, maybe???

	// will show all items
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response =  await axios.get(`${process.env.REACT_APP_SERVER_URL}/item`)
				console.log(response.data)
				setItems(response.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchItems()
	}, [])

	const itemComponents = items.map(item=> {
		return (
			<div key={`${item._id}`} className='eachBox shadow' >
				<div className='card-background ' >
					<h1 className='text'>name: {item.name}</h1>
					<h1 className='text'>price: {item.price}</h1>
					<h1 className='text'>category: {item.category}</h1>
					{/* <h1 className='text'>{item.}</h1> */}
					{/* <iframe src={item.url} frameborder="0"></iframe> */}
					{/* <iframe 
						width="360" 
						height="215" 
						src={item.url}
						title="YouTube video player" 
						frameborder="0" 
						// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						allowfullscreen
					> */}
					{/* </iframe> */}

					<button>Details</button>
				</div>
				
			</div>
		)
	})

	return (
		<div >
			
			{itemComponents}
		</div>
	)
}