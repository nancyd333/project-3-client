import '../css/Welcome.css'
import 'bulma/css/bulma.min.css'
import { useNavigate } from 'react-router-dom';

export default function Welcome() {

	let navigate = useNavigate();
	const routeChange = () =>{ 
	  let path = `/items`; 
	  navigate(path);
	}

	return (
		<div>
			<div>
				<img src='img/images.jpeg' className='img' />
			</div>

			<div className='cards'>
				<div id="cardtext1">
					<strong>Reliable</strong>
					<div className='sub-text'>
						World's #1 home planner and development <br />
						Obtain inspiration with people all around the world from cultural decoration to technology and advancement!
					</div>
				</div>
				<div id="cardtext2">
					<strong>Resourceful</strong>
					<div className='sub-text'>
						Create your dream home by ensuring all resources and essentials needed in your home! Develop all the improvements needed in your home and impress your friends and family.
					</div>
				</div>
				<div id="cardtext3">
					<strong>Renewable</strong>
					<div className='sub-text'>
						Keep up with society! <br />
						Make sure you get the latest modern technology and strive for longevity! Recreate your house and transform into a home.
					</div>
				</div>
				<div id="cardtext4">
					<strong>Reformed</strong>
					<div className='sub-text'>
						Life starts from the home! <br />
						Start the improvement here and make a change!
						<br />
						<br />
						<button 
						className='button margin'
						onClick={routeChange}
						>
							Start now</button>
					</div>
				</div>
			</div>


			{/* <div class='cards'>
				<div id="articletext1">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
				<div id="articletext2">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
				<div id="articletext3">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
				<div id="articletext4">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
			</div> */}
		</div>
	)
}