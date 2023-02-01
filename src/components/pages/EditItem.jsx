import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom"
import Items from './Items';
import '../css/NewItem.css'
import 'bulma/css/bulma.min.css'


const EditItem = (props) => {

  let { id } = useParams()

  // console.log('this is props', props.items)

  const currentItemDetail = props.items.find(item => item._id === id )
  // console.log('this is ----', currentItemDetail)

  const [formData, setFormData] = useState({
    name: currentItemDetail.name,
    category: currentItemDetail.category,
    url: currentItemDetail.url,
    price: currentItemDetail.price
  });
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

// console.log(id)
  const handleDeleteClick = async () => {
    try {
        // request the server delete the current bounty
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/item/${id}`)
        // if the update succces, get /editItem to update state in parent
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/item`);
        // // update the page
        // props.setBounties(response.data)
        // redirect 
        navigate('/items')
    } catch(err) {
        console.warn(err)
    }
}

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.url) {
      newErrors.url = 'URL is required';
    }
    if (!formData.price) {
      newErrors.price = 'Price is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const navigate = useNavigate()
  const handleSubmit = async event => {
    event.preventDefault();
    // get the token from local storage
		const token = localStorage.getItem('jwt')
		// make the auth headers
		const options = {
			headers: {
				'Authorization': token
			}
		}
    if (validateForm()) {
      try {
        await axios.put(`${process.env.REACT_APP_SERVER_URL}/item/${id}`, formData, options)
        .then(response=>{
            console.log(response.data)
            //once the backend gets back to us, navigate to the / route to see all items
            navigate('/items') //clicking a link for the user
        
        })

        // redirect the user to the details page
      } catch (error) {
        // display an error message to the user
      }
    }
  };

  return (
    <div class="columns is-centered">
    <div class = "column is-5">
            <div class = "box">
                <h2 class ="title">Edit review</h2>
    <form onSubmit={handleSubmit}>
      <div class="field">
        <label class="label" htmlFor="name">Product name</label>
        <input
          class="input is-medium"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div class="field">
        <label class="label" htmlFor="price">Price</label>
        <input
          class="input is-medium"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        {errors.price && <p>{errors.price}</p>}
      </div>
      <div class="field">
        <label class="label" htmlFor="category">Category</label>
        <input
          class="input is-medium"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        {errors.category && <p>{errors.category}</p>}
      </div>
      <div class="field">
        <label class="label" htmlFor="url">YouTube URL:</label>
        <input
          class="input is-medium"
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          required
        />
        {errors.url && <p>{errors.url}</p>}
      </div>

      <button class="button is-medium is-dark m-1" type="submit">Update</button>
      <button class="button is-medium is-dark m-1" onClick={handleDeleteClick}>Delete</button>
    </form>
    </div>
    </div>
    </div>
  );
  
};


export default EditItem
