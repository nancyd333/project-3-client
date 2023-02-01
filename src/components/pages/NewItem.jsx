import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'  
import { Link } from 'react-router-dom'
import '../css/NewItem.css'
import 'bulma/css/bulma.min.css'


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
        <div class="columns is-centered">
        <div class = "column is-5">
                <div class = "box">
                    <h2 class ="title">Create a new review</h2>
            <form onSubmit = {handleSubmit}>
                <div class="field">
                    <label class="label" htmlFor="name">Product name</label>
                    <input 
                        class="input is-medium" 
                        type = 'text'
                        id='name'
                        placeholder='name ...'
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        required
                    />
                </div>
                <div class="field">
                    <label class="label" htmlFor="price">Price</label>
                    <input 
                        class="input is-medium" 
                        type = 'text'
                        id='price'
                        placeholder='price ...'
                        value={form.price}
                        onChange={e => setForm({...form, price: e.target.value})}
                        required
                    />
                </div>
                <div class="field">
                    <div class="control">
                    <label class="label" htmlFor="category">Category</label>
                    <input 
                        class="input is-medium " 
                        type = 'text'
                        id='category'
                        placeholder='category ...'
                        value={form.category}
                        onChange={e => setForm({...form, category: e.target.value})}
                        required
                    />
                    </div>
                </div>
                <div class="field">
                    <label class="label" htmlFor="url">YouTube URL</label>
                    <p>Only enter youtube vidoes with the format of <strong>https://www.youtube.com/watch?v=</strong>foYyeGLf9yU</p>
                    <p>Please note: the 'foYyeGLf9yU' string in the above example will be the unique code youtube has created for your video and therefore will be different from the example. </p>
                    <input 
                        class="input is-medium" 
                        type = 'text'
                        id='url'
                        placeholder='enter youtube url'
                        value={form.url}
                        onChange={e => setForm({...form, url: e.target.value})}
                        required
                    />

                </div>
                
                
                <button class="button is-medium is-dark m-1"  type='submit'>Submit</button>
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






