import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'  

export default function NewItem(currentUser) {

	const[form, setForm] = useState({
        //initialize all of the values as empty strings
        name: '',
		price: '',
		category: '',
		url: '',
		user: currentUser.id
   
    })
	 // console.log(process.env.REACT_APP_SERVER_URL)

    //invoke the useNavigate hook to get a navigate function to use
    const navigate = useNavigate()

    //submit handler function that psots the form data from state to the backend
    const handleSubmit = e =>{
        e.preventDefault()
		// get the token from local storage
		const token = localStorage.getItem('jwt')
		// make the auth headers
		const options = {
			headers: {
				'Authorization': token
			}
		}
        //take form data from the state, post it to the backend with axios
        //axios.post(url to make a request to, {requerst body}, {options})
        axios.post(`${process.env.REACT_APP_SERVER_URL}/item/new`, form, options)
        .then(response=>{
            console.log(response.data)
            //once the backend gets back to us, navigate to the / route to see all items
            navigate('/items') //clicking a link for the user
        })
        .catch(console.warn)
        //handle errors
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type = 'text'
                        id='name'
                        placeholder='name ...'
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                    />
                    <label htmlFor="price">Price:</label>
                    <input 
                        type = 'text'
                        id='price'
                        placeholder='price ...'
                        value={form.price}
                        onChange={e => setForm({...form, price: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input 
                        type = 'text'
                        id='category'
                        placeholder='category ...'
                        value={form.category}
                        onChange={e => setForm({...form, category: e.target.value})}
                    />
                    <label htmlFor="url">URL:</label>
                    <input 
                        type = 'text'
                        id='url'
                        placeholder='url ...'
                        value={form.url}
                        onChange={e => setForm({...form, url: e.target.value})}
                    />
                </div>
               
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}






