import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom"


const EditItem = () => {
    let { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    url: '',
    price: ''
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        {errors.category && <p>{errors.category}</p>}
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
        {errors.url && <p>{errors.url}</p>}
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <p>{errors.price}</p>}
      </div>
      <button type="submit">Update</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </form>
  );
  
};

///delete



export default EditItem
